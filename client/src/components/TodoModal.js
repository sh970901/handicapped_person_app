import Modal from 'react-modal'
import React from 'react'
import Qlogo from '../image/light.png'

Modal.setAppElement("#root")

const TodoModal = (props) => {
    return (
        <div className='modal'>
            <Modal
            isOpen={props.openModal}
            onRequestClose={props.closeModal}
            >
                <div className='modalItem'>
                <h3>사용법</h3>
                <h1>ㅋㅇㅋㅇㅋㅇㅋ</h1>
                <p>ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</p>
                <p>ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</p>
                <p>ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</p>
                <p>ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</p>
                
                <button onClick={props.closeModal}>닫기</button>
                </div>
            </Modal>
        </div>
    )
}

export default TodoModal