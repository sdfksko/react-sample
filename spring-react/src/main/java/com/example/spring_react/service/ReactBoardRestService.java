package com.example.spring_react.service;

import com.example.spring_react.dto.BoardDTO;
import com.example.spring_react.dto.MemberDTO;
import com.example.spring_react.dto.NewBoardRequestDTO;
import com.example.spring_react.entity.Board;
import com.example.spring_react.entity.Member;
import com.example.spring_react.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReactBoardRestService {

    @Autowired
    private BoardRepository boardRepository;


    public Page<Board> createBoardPage(Pageable pageable) {
        return boardRepository.findAll(pageable);
    }


    public Board newBoard(NewBoardRequestDTO newBoardRequestDTO) {
        MemberDTO memberDTO = newBoardRequestDTO.getMemberDTO();
        Member member = memberDTO.createMemberEntity(memberDTO);

        BoardDTO boardDTO = newBoardRequestDTO.getBoardDTO();

        boardDTO.setReadCount(0);
        boardDTO.setMember(member);

        Board board = boardDTO.createBoard(boardDTO);

        boardRepository.save(board);

        return board;
    }

    public Board deleteBoard(Long boardId) {
        Board board = boardRepository.findById(boardId).orElse(null);
        Board boardClone = board;

        boardRepository.delete(board);

        return boardClone;
    }

    public Board boardReadCountAdd(Long boardId) {
        Board board = boardRepository.findById(boardId).orElse(null);
        BoardDTO boardDTO = new BoardDTO();

        boardDTO.setReadCount(board.getReadCount() + 1);

        Board target = boardDTO.createBoard(boardDTO);

        board.update(target);

        boardRepository.save(board);

        return board;
    }

    public Board editBoard(Long boardId) {
        Board board = boardRepository.findById(boardId).orElse(null);

        return board;
    }

    public Board editBoardAdd(BoardDTO boardDTO) {
        Board board = boardRepository.findById(boardDTO.getId()).orElse(null);

        Board target = boardDTO.createBoard(boardDTO);

        board.update(target);

        boardRepository.save(board);

        return board;
    }
}
