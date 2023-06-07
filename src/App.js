import Section1 from './group/Section1'
import './app.scss'
import Button from './group/Button'
import Header from './group/Header'

export default function App () {

    return (
        <div className='wrapper'>
            <h3>Web App</h3>
            <Header />
            <Section1/>
            <div className='wrapper__btns'>
                <button>blue</button>
                <button>green</button>
                <Button/>
            </div>
        </div>
    )
}