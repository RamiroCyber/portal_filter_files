import React from 'react';
import './App.css'
import Uploader from "./components/Uploader.tsx";

const FileUploadComponent: React.FC = () => {
    // const [message, setMessage] = useState<string>('');
    //
    // const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setMessage(event.target.value);
    // };

    return (
        <div>
            <div style={{position:"relative", zIndex:10}}>
                <Uploader></Uploader>
            </div>
            <div className="waveWrapper waveAnimation">
                <div className="waveWrapperInner bgTop">
                    <div className="wave waveTop" style={{ backgroundImage: 'url(http://front-end-noobs.com/jecko/img/wave-top.png)' }}></div>
                </div>
                <div className="waveWrapperInner bgMiddle">
                    <div className="wave waveMiddle" style={{ backgroundImage: 'url(http://front-end-noobs.com/jecko/img/wave-mid.png)' }}></div>
                </div>
                <div className="waveWrapperInner bgBottom">
                    <div className="wave waveBottom" style={{ backgroundImage: 'url(http://front-end-noobs.com/jecko/img/wave-bot.png)' }}></div>
                </div>

            </div>
        </div>
    );
};

export default FileUploadComponent;
