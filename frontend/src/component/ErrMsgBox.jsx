import { RxCrossCircled } from "react-icons/rx";
export const ErrMsgBox = ({ err }) => {
    const boxHide = () => {
        // document.querySelector('.msg-box').classList.add('d-none')
        document.querySelector('.msg-box').classList.remove('msg-show')
        // document.querySelector('.msg-box').classList.add('visually-hidden')
    }
    return (
        <div className='msg-box py-5'>
            <a><RxCrossCircled color='red' size='3rem' /></a>
            <div className='msg-info'>
                <h2 className="mb-0">Validation Failed</h2>
                {<p id="msg-err">Err Msg form Backend Server Problem</p> || { err }}
                <button className='btn btn-primary shadow-none' onClick={boxHide}>OK</button>
            </div>
        </div>
    )
}