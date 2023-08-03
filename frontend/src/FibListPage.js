import { useLocation, useNavigate } from "react-router-dom"

const FibListPage = () => {
    const { state } = useLocation() 
    const { fibList } = state

    const navigate = useNavigate()
    
    return (
        <div>
            {fibList}
            <div>
            <button onClick={() => {
                navigate('/')
            }}>Back</button>
            </div>
            
        </div>
    )
}

export default FibListPage;