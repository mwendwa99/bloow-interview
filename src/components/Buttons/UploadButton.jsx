import React from 'react';
// assets
import PlusButton from '../../assets/svg/PlusButton';

const UploadButton = () => (
    <>
        {/* <div className="flex justify-center"> */}
        <div className="flex justify-center h-full bg-gray-800 p-5">
            <div className="mb-3 w-1/3 flex justify-evenly">
                <label
                    htmlFor="formFileMultiple"
                // className="form-label inline-block mb-2 text-gray-700"
                >
                    <PlusButton className="motion-safe:animate-pulse
                    drop-shadow-lg hover:animate-none hover:cursor-pointer" width={40} height={40} />
                    <input className="hidden" type="file" id="formFileMultiple" multiple />
                </label>
            </div>
        </div>
    </>
)

export default UploadButton