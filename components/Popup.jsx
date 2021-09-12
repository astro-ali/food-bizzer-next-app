

const Popup = ({ children, trigger, setClose }) => {
    return (trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div onClick={() => setClose(false)} className="close-btn"><img src="images/cancel-black.svg" alt="Close-btn" /></div>
                {children}
            </div>
        </div>
    ) : "";
}

export default Popup;
