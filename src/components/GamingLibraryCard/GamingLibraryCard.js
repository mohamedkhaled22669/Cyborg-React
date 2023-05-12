import './GamingLibraryCard.css'

import {SecondaryButton} from '../index'

const GamingLibraryCard = (props) => {

    const downloadStats = () => {
        if (props.download === 'download') {
            return (
                <SecondaryButton>
                    Download
                </SecondaryButton>)
        }else {
            return (
                <SecondaryButton>
                    Downloaded
                </SecondaryButton>)
        }
    }

    return (
        <div className='gaming-library-card'>
            <ul>
                <li className='gaming-library-item-image'><img  src={props.image} alt=''/></li>
                <li><h4>{props.title}</h4><span>{props.category}</span></li>
                <li><h4>Data Added</h4><span>{props.data_added}</span></li>
                <li><h4>Hours Played</h4><span>{props.hours_played}</span></li>
                <li><h4>Currently</h4><span>{props.download}</span></li>
                {downloadStats()}
                
            </ul>
        </div>
    )
}

export default GamingLibraryCard