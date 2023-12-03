import React from 'react';
import Uploader from "./components/Uploader.tsx";
import './App.css'

const FileUploadComponent: React.FC = () => {
    // const [message, setMessage] = useState<string>('');
    //
    // const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setMessage(event.target.value);
    // };

    return (
        <div>
            <Uploader></Uploader>
            <div className="waveWrapper waveAnimation">
                <div className="waveWrapperInner bgTop">
                    <div className="wave waveTop"
                         style={{backgroundImage: 'url(https://front-end-noobs.com/jecko/img/wave-top.png)'}}></div>
                </div>
                <div className="waveWrapperInner bgMiddle">
                    <div className="wave waveMiddle"
                         style={{backgroundImage: 'url(https://front-end-noobs.com/jecko/img/wave-mid.png)'}}></div>
                </div>
                <div className="waveWrapperInner bgBottom">
                    <div className="wave waveBottom"
                         style={{backgroundImage: 'url(https://front-end-noobs.com/jecko/img/wave-bot.png)'}}></div>
                </div>

            </div>
        </div>
    );
};

export default FileUploadComponent;
