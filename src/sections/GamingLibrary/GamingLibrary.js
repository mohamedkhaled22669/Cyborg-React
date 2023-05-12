import './GamingLibrary.css'

import { GamingLibraryCard, SectionHeader, SectionWrapper } from '../../components/index'

import GamingLibraryData from '../../components/Data/GamingLibraryData'

const GamingLibrary = () => {

    const cards = GamingLibraryData.map(card => {
        return <GamingLibraryCard 
        key={card.id} 
        image={card.image} 
        title={card.title} 
        category={card.category} 
        hours_played={card.hours_played} 
        download={card.download}
        data_added={card.data_added} />
    });

    return (
        <>
            <SectionWrapper >
                <SectionHeader>Gaming Library</SectionHeader>
                <div className='gaming-library-cards'>
                    {cards}
                </div>
            </SectionWrapper>
        </>
    )
}

export default GamingLibrary;