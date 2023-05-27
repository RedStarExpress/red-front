import React from 'react'
import { RxCross1 } from "react-icons/rx";

function SearchModal({ setShowSearchModal }) {
    return (
        <div class="modal fade custom_search_pop show" id="exampleModalCenter"
            tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
            style={{ paddingRight: "17px", display: "block", background: "rgba(0, 0, 0, 0.3)" }}>

            <RxCross1 style={{ color: "#FF3414", fontSize: "24px", fontWeight: "700", cursor: "pointer", position: "absolute", right: "16px", top: "16px" }} onClick={() => setShowSearchModal(false)} />
            
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="serch_form">
                        <input type="text" placeholder="Trek kodni yozing" />
                        <button type="submit">Qidirish</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchModal