import React, { useRef } from 'react'
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

function SearchModal({ setShowSearchModal }) {
    const input = useRef()
    const navigate = useNavigate()
    const search = (e) => {
        e.preventDefault()
        setShowSearchModal(false)
        navigate("/track_code", { state: input?.current?.value })
    }
    return (
        <div class="modal fade custom_search_pop show" id="exampleModalCenter"
            tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
            style={{ paddingRight: "17px", display: "block", background: "rgba(0, 0, 0, 0.3)" }}>

            <RxCross1 style={{ color: "#FF3414", fontSize: "24px", fontWeight: "700", cursor: "pointer", position: "absolute", right: "16px", top: "16px" }} onClick={() => setShowSearchModal(false)} />

            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <form class="serch_form" onSubmit={search}>
                        <input type="text" ref={input}
                        placeholder="Trek kodni yozing" />
                        <button type="submit">Qidirish</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchModal