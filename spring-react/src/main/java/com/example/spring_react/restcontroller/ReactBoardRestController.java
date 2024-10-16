package com.example.spring_react.restcontroller;

import com.example.spring_react.dto.BoardDTO;
import com.example.spring_react.dto.MemberDTO;
import com.example.spring_react.dto.NewBoardRequestDTO;
import com.example.spring_react.entity.Board;
import com.example.spring_react.service.ReactBoardRestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ReactBoardRestController {

    @Autowired
    private ReactBoardRestService reactBoardRestService;

    @GetMapping("/boardData")
    public ResponseEntity<Page<Board>> boardData(@PageableDefault(size = 10, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {

        Page<Board> boardPage = reactBoardRestService.createBoardPage(pageable);

        if(boardPage == null) {
            ResponseEntity.status(HttpStatus.CONFLICT).body("데이터 조회 실패");
        }

        return ResponseEntity.ok(boardPage);
    }

    @PostMapping("/newBoard")
    public ResponseEntity<String> newBoard(@RequestBody NewBoardRequestDTO newBoardRequestDTO) {

        Board board = reactBoardRestService.newBoard(newBoardRequestDTO);

        if(board == null) {
            ResponseEntity.status(HttpStatus.CONFLICT).body("게시글 등록실패");
        }

        return ResponseEntity.ok("게시글 등록성공");
    }

    @GetMapping("/deleteBoard")
    public ResponseEntity<String> deleteBoard(@RequestParam(name="boardId") Long boardId) {

        Board board = reactBoardRestService.deleteBoard(boardId);

        if(board == null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("게시글 삭제 실패");
        }
        return ResponseEntity.ok("게시글 삭제 성공");
    }

    @GetMapping("/boardReadCount")
    public ResponseEntity<String> boardReadCount(@RequestParam(name="boardId") Long boardId) {

        System.out.println(boardId);

        Board board = reactBoardRestService.boardReadCountAdd(boardId);

        if(board == null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("조회수 증가 실패");
        }
        return ResponseEntity.ok("조회수 증가 성공");
    }

    @GetMapping("/editBoard")
    public ResponseEntity<Board> editBoard(@RequestParam(name="boardId") Long boardId) {
        Board board = reactBoardRestService.editBoard(boardId);

        if(board == null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
        }

        return ResponseEntity.ok(board);
    }

    @PostMapping("/editBoardAdd")
    public ResponseEntity<String> editBoardAdd(BoardDTO boardDTO) {
        Board board = reactBoardRestService.editBoardAdd(boardDTO);

        if(board == null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("게시글 수정에 실패하였습니다.");
        }

        return ResponseEntity.ok("게시글 수정에 성공하였습니다");
    }
}