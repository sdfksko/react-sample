import DaumPostcode from 'react-daum-postcode';


function SearchAddress(data) {

    console.log(data);

    const style = {
        width: "400px",
        height: "600px",
        border: "1px solid #333333",
    };


    return(
        <div>
            <DaumPostcode style={style} />
        </div>
    )
}

export default SearchAddress;