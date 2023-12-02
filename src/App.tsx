import React, { } from 'react';
import './App.css'
import Uploader from "./Uploader.tsx";

const FileUploadComponent: React.FC = () => {
    // const [message, setMessage] = useState<string>('');
    //
    // const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setMessage(event.target.value);
    // };

    return (
        <div>
            <Uploader></Uploader>
            <button type="submit" style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
            }}>Enviar
            </button>
        </div>

    );
};

export default FileUploadComponent;
