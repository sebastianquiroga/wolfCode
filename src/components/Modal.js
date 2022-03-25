import React from 'react'
import { CloseHeader, ModalContainer, ModalHeader, WrapperModal, ModalImg, ModalDescription, BtnModalContainer, BtnModal } from './ModalGallery.elements'
import { FaTimes, FaGitAlt, FaPlay } from 'react-icons/fa';


const Modal = ({ state, setState, tittle, img, description, demo, repo,  setOverlay }) => {
    return (
        <>

            {state &&
                <WrapperModal>

                    <ModalContainer>

                        <ModalHeader>

                            <h3>
                                {tittle}
                            </h3>

                        </ModalHeader>

                        <CloseHeader onClick={() => setState(false)}
                   
                        >
                            <FaTimes onClick={() => setOverlay(false)}/>
                        </CloseHeader>

                        <ModalImg src={img} />

                        <ModalDescription>
                            <p>
                                {description}
                            </p>
                        </ModalDescription>

                        <BtnModalContainer>
                            <BtnModal href={demo} target="_blank">
                                Demo <FaPlay />
                            </BtnModal>
                            <BtnModal href={repo} target="_blank">
                                Repo <FaGitAlt />
                            </BtnModal>
                        </BtnModalContainer>

                    </ModalContainer>

                </WrapperModal>
            }

        </>
    )
}

export default Modal