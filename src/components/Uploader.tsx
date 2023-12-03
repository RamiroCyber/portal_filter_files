import React, { useState, DragEvent, useRef } from 'react';
import './Uploader.css';
import { MdDelete } from 'react-icons/md';
import { FaFileAlt } from 'react-icons/fa';

const Uploader: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploading, setUploading] = useState(false);



    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFiles([...files, ...Array.from(event.target.files)]);
        }
    };

    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (event.dataTransfer.files) {
            setFiles([...files, ...Array.from(event.dataTransfer.files)]);
        }
    };

    const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleDelete = (fileIndex: number) => {
        setFiles(files.filter((_, index) => index !== fileIndex));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setUploadProgress(0);
        setUploading(true);
        const interval = setInterval(() => {
            setUploadProgress(prevProgress => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    setUploading(false);
                    return 200;
                }
                return prevProgress + 5;
            });
        }, 130);
    };



    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div className="wrapper">
                <div className="container">
                    <h1>Upload a file</h1>
                    <div className="text-input">
                        <input type="text" id="input1" placeholder="Digite as palavras-chave!"/>
                            <label htmlFor="input1">Keywords</label>
                    </div>
                    <div className="upload-container" onDrop={handleDrop} onDragOver={handleDragOver} onClick={handleClick}>
                        <div className="border-container">
                            <div className="icons fa-4x">
                                <i className="fas fa-file-alt"></i>
                                <i className="fas fa-file-pdf"></i>
                            </div>
                            <label htmlFor="fileUpload" style={{ marginBottom: '10px', display: 'inline-block' }}>
                                <span>Arraste</span> os arquivos aqui ou <span>clique</span> para fazer upload
                            </label>
                            <input type="file" id="fileUpload" onChange={handleFileChange} style={{ display: 'none' }} accept=".txt,.pdf,.doc,.docx" multiple ref={fileInputRef} />

                        </div>
                        {uploading && (
                            <div className="progress-bar">
                                <div className="progress"  style={{ width: `${uploadProgress}%` }}>{uploadProgress}%</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
                <button type="submit" className={'bottom'}>Enviar
                </button>
            {files.length > 0 && (
                <section className={'uploaded-row'}>
                    {files.map((file, index) => (
                        <div className={'uploaded-content'} key={index}>
                            <div>
                                <FaFileAlt style={{ marginRight: '10px' }} />
                                {file.name}
                            </div>
                            <MdDelete style={{ color: 'red', cursor: 'pointer', marginLeft: '10px' }} onClick={() => handleDelete(index)} />
                        </div>
                    ))}
                </section>
            )}
</form>
        </div>
    );
};

export default Uploader;
