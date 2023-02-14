import config from '../../config/config.json'
import menu from '../../config/menu.json'
import Link from 'next/link'

function Footer() {
	const {copyright} = config.params
	const {footer} = menu

    return (
	<footer className="position-relative">
	<div className="cta h_4">
        <div className="container">
            <div className="min_cta_area">
                <h3>Interested in helping uplift <br/> Black businesses?</h3>
                <Link href="/contribute" className="bg_btn">Contribute to Database</Link>
            </div>
        </div>
    </div>
		<div className="container">
			<div className="row">
				<div className="col-md-8 mx-auto mb-5 text-center">
					<div className='logo d-flex mb-3' style={{justifyContent: 'center'}}>
					</div>
					<div className='desktop'>
					<div className='menu'>
							<ul className='menu-items'>
								{footer.map((item, key) => (
									<li key={key}><Link href={item.url} target={`${!item.internal ? '_blank' : '_self'}`}>{item.name}</Link></li>
								))}
							</ul>
						</div>
                	</div>
					<div className="mt-3">{copyright}</div>
				</div>
			</div>
		</div>
			<div className="shape_img">
				<img className="one" src="./assets/images/1.png"/>
			</div>
	</footer>
    );
}

export default Footer;