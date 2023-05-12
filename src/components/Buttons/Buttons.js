import './Buttons.css'

const PrimaryButton = (props) => {
    return (
        <div className='button primary-btn'>
            <a href='/#'>
                {props.children}
            </a> 
        </div>
    )
}

const SecondaryButton = (props) => {
    return (
        <li className='button secondary-btn'>
            <a href='/#'>
                {props.children}
            </a> 
        </li>
    )
}

export default PrimaryButton;
export {SecondaryButton}