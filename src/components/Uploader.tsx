import React, { useState, DragEvent, useRef } from 'react';
import './Uploader.css';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { FaFileAlt } from 'react-icons/fa';

const Uploader: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

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
        console.log('Arquivos:', files);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div onDrop={handleDrop} onDragOver={handleDragOver} onClick={handleClick}>
                    <MdCloudUpload size="3em" style={{ margin: '10px auto', display: 'block' }}/>
                    <label htmlFor="fileUpload" style={{ marginBottom: '10px', display: 'inline-block' }}>
                        Arraste os arquivos aqui ou clique para fazer upload
                    </label>
                    <input type="file" id="fileUpload" onChange={handleFileChange} style={{ display: 'none' }} accept=".txt,.pdf,.doc,.docx" multiple ref={fileInputRef} />
                </div>
            </form>
            <section className={'uploaded-row'}>
                {files.map((file, index) => (
                    <div className={'uploaded-content'} key={index}>
                        <div>
                        <FaFileAlt style={{ marginRight: '10px' }} />
                        {file.name}
                        </div>
                        <MdDelete style={{color:'red', cursor: 'pointer', marginLeft: '10px' }} onClick={() => handleDelete(index)} />
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Uploader;
