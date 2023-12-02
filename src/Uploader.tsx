import React, { useState, DragEvent } from 'react';
import './Uploader.css';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';

const Uploader: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        setFile(file);
    };

    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        setFile(file);
    };

    const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (file) {
            console.log('Arquivo:', file);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div onDrop={handleDrop} onDragOver={handleDragOver}>
                    {/* Ícone de upload */}
                    <MdCloudUpload size="3em" style={{ margin: '10px auto', display: 'block' }} />

                    <label htmlFor="fileUpload" style={{ marginBottom: '10px', display: 'inline-block' }}>
                        Arraste o arquivo aqui ou clique para fazer upload
                    </label>
                    <input type="file" id="fileUpload" onChange={handleFileChange} style={{ display: 'none' }} accept=".txt,.pdf,.doc,.docx" />
                </div>
            </form>
        </div>
    );
};

export default Uploader;
