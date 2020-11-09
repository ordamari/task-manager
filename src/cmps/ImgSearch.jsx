import React from 'react'
import { useForm } from '../services/customHooks';
import { imgService } from '../services/imgService';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';


export function ImgSearch({ setImgs }) {

    const [search, handleChange] = useForm({ keyword: '' });

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const data = await imgService.getNewImage(search.keyword);
        console.log("handleSubmit -> data", data)
        setImgs(data.results)

    }

    const cleanImgs = () => {
        handleChange();
        setImgs([])
    }


    return (
        <div className='imgs-input'>
            <div className="in-input flex">
                {search.keyword.length > 0 &&
                    <div className='flex align-center delete-container'>
                        <button onClick={() => cleanImgs()}><CloseIcon /></button>
                        

                    </div>
                }
                <SearchIcon />
            </div>
            <form className='flex align-center' onSubmit={(ev) => { handleSubmit(ev) }}>
                <input name="keyword" autoComplete="off" placeholder='Background Image' value={search.keyword} onChange={handleChange} type="text" />
            </form>
        </div>
    )
}
