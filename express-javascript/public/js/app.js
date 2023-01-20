const App = () => {
    const [products, setproducts] = React.useState([]);
    const [form,setForm] =  React.useState({
        name : '',
        price : ''
    })

    React.useEffect(() => {
        fetchproducts();
    }, [])
    
    function fetchproducts(){
        fetch('/api/products')
        .then((res) => res.json())
        .then(data => {
            setproducts(data)
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        if (!form.name || !form.price){
            return;
        }
        fetch('/api/products', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(form)
        })
        .then(res => res.json())
        .then(data => {
            fetchproducts();
            setForm({name: '', price : ''});
        })
    }

    function updateForm(event, field){
        if(field === 'name'){
            setForm({
                ...form,
                name: event.target.value
            });
        }else if(field === 'price'){
            setForm({
                ...form,
                price: event.target.value
            });
        }
    }

    const deleteProduct = (productId) => {
        fetch(`/api/products/${productId}`, {
            method : 'DELETE'
        })
        .then((res) => res.json())
        .then((data) => {
            fetchproducts();
        })
    }


    return (
        <>
        <div className="card">
            <div className="card-header">
                Add a Product
            </div>
            <div className="card-body">
                <form onClick={handleSubmit}>
                    <input value={form.name} onChange={ () => updateForm(event,'name')} type='text' placeholder='Product Name' className='form-control mt-3'/>
                    <input value={form.price} onChange={ () => updateForm(event,'price')} type='text' placeholder='Product Price' className='form-control mt-3'/>
                    <button type='submit' className='btn btn-primary mt-3'>Add</button>
                </form>
            </div>
        </div>
        <hr></hr>
        <h5>Product list</h5>
        <ul className="list-group mt-3">
            {
                products.map((product) => {
                    return (
                        <li key={product.id} className="list-group-item d-flex justify-content-between" aria-current="true">
                            <strong>{product.name} : </strong>
                            <div>
                                ${product.price}
                            </div>
                            <button className="btn" onClick={ () => deleteProduct(product.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16">
                                <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                            </button>
                        </li>
                    )
                })
            }
    </ul>
    </>
    )
}
ReactDOM.render(<App/>, document.getElementById('app'))