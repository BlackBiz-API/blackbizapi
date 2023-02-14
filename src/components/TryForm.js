function TryForm(props) {
    return (
        <div className='try_input'>
        <div className='input-wrap'>
            <h4 className='mb-2'>Enter a city below</h4>
            <p>Enter a city in the following format <em><strong>&#123;new-york&#125;</strong></em>.</p>
        
            <div className="mb-4 mt-4">
            <div className="input-label-absolute input-label-absolute-right">
                <div className="label-absolute"></div>
                <input className="form-control pe-4" type="search" name="search" placeholder="Keyword" id="form_search" autoComplete='off' value={`${props.cityInput}`} onChange={props.handleInput}/>
            </div>
            <div className="mb-4 mt-4">
                <div className="input-label-absolute input-label-absolute-right mb-4">
                    <div className="label-absolute"></div>
                    <div className='req-url'><code>{`${props.BASE_URL}/businesses/city/${props.cityInput}`}</code></div>
                </div>
                <button className='btn btn-dark header-btn' onClick={props.getJson}><span>Submit</span></button>
            </div>
        </div>
        </div>
    </div>
    );
}

export default TryForm;