import Button from './button'

const Header = ({ title, onAdd, showAdd }) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className='header'>
        <h1>{title}</h1>
        <Button
        color={showAdd ? 'red' : '#8A2BE2'}
        text={showAdd ? 'Close': 'Add'}
        onClick={onAdd}
        />
        </header>
    )
}

Header.defaultProps = {
    title: 'To-do List',
}

//Css in JS
// headingStyle = {
    //color: 'red',
    //backgroundColor: 'black',}//

export default Header
