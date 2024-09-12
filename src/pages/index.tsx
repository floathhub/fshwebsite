import { Button, Card } from 'react-bootstrap';
import style from './index.module.css';
import wok9jaLogo from '../assets/images/wok9jaBg.svg';
import surplusNaijaLogo from '../assets/images/surplusNijaLogo.svg'

const HomePage = () => {

    const qualities = [
        'Efficient and easy to use software solutions.',
        'Customize base on your business need. ',
        'Cost effective with no value trade off.',
        '24hr Dedicated support agents.',
        'Lifelong technical support.'
    ]

    interface IApps {
        title: string,
        desc: string,
        imgUrl: string,
        url: string
    }
    const ourApps: IApps[] = [
        {
            title: 'Wok9ja',
            desc: 'A Freelance platform for industry professionals in Nigeria.',
            imgUrl: wok9jaLogo,
            url: 'https://wok9ja.vercel.app/'
        },
        {
            title: 'surplusfood',
            desc: 'A grocery vendor store for buying and selling of groceries',
            imgUrl: surplusNaijaLogo,
            url: 'https://surplusfood9ija.vercel.app/'
        },
    ]
    return (
        <div>
            <div className={`d-flex flex-column px-3 align-items-center justify-content-center text-light ${style.jumbotron}`}>
                <h5 className='headers'>
                    Innovative Solution
                    For  Every of Your
                    Business Need.
                </h5>

                <p className="text-light">
                    Unlock innovative solutions tailored to
                    meet your unique business needs,
                    driving growth and success in
                    a competitive market.
                </p>
                <div className='d-flex gap-2 w-100' >

                    <Button className='fw-bold d-flex gap-2' style={{ fontFamily: 'poppins' }}>
                        <i className="bi bi-headset"></i>
                        Talk to us
                    </Button>
                </div>

            </div>
            <h5 className='title mt-4'>
                Serving  both enterprise and small
                scale business owners.
            </h5>

            <div className='d-flex gap-3 mt-3'>
                <p>Trovest-Capital</p>
                <p>ChaseFabricate</p>
                <p>House Of Olives</p>
                <p>GSSL</p>
            </div>

            <h5 className='title mt-4 w-75'>
                Reliable and Easy to use
                software solutions.
            </h5>

            <div className={`my-4 ${style.card}`}>

            </div>

            <h5 className='title mt-4 w-75'>
                Worry about  your business
                let us handle the Tech.
            </h5>

            <p className="">
                You dont have to trouble yourself with the
                tech of how your business processes are
                automated, let us take that burden.
            </p>

            <div>
                {
                    qualities.map((qual: string) => (<div className='d-flex gap-2'>
                        <i className="bi bi-check text-success"></i>
                        <p>{qual}</p>
                    </div>))
                }
            </div>

            <h5 className='title mt-4 w-75'>
                Enjoy access to a team of
                Experienced Tech experts
            </h5>

            <p className="">
                We bring to your reach access to a team of tech
                experts with years of experience across
                different I.T field.
            </p>

            <div className={`my-4 ${style.card2}`}>

            </div>

            <div className='d-flex flex-column align-items-center justify-content-center w-100'>
                <h5 className='title mt-4 text-center w-75'>
                    Trusted by over 2000 users
                    and business owners
                </h5>

                <p className="w-75 text-center">
                    Testimony from our users across all
                    our platform speak for us.
                </p>
            </div>

            <div className='w-100 p-3 d-flex flex-column gap-3 align-items-center justify-content-center py-5 rounded rounded-5' style={{ backgroundColor: 'rgba(42,183,200,0.09)' }}>
                {
                    ourApps.map((app: IApps) => (
                        <Card className='bg-light w-100 shadow-sm p-3 rounded rounded-3 border border-0'>
                            <Card.Body>
                                <img src={app.imgUrl} />
                                <h5 className='title'>{app.title}</h5>
                                <p>{app.desc}</p>
                                <div className='d-flex gap-2'>
                                    <a className='text-dark' href={app.url} target="_blank" style={{ textDecoration: 'none' }}>Try it out</a>
                                    <i className="bi bi-arrow-right"></i>
                                </div>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>

            <div className='w-100 d-flex justify-content-center'>
                <Card className='bg-primary text-light mt-4 text-center w-75 shadow-sm p-3 rounded rounded-3 border border-0'>
                    <Card.Body className='d-flex flex-column align-items-center justify-content-center'>

                        <h5 className='title'>
                            Want to start a career
                            in tech today?
                        </h5>
                        <p className='text-light'>Join our training academy and
                            get yourself on track
                        </p>
                        <Button className='fw-bold bg-light d-flex gap-2 text-secondary' style={{ fontFamily: 'poppins' }}>
                            {/* <i className="bi bi-headset"></i> */}
                            Get started
                        </Button>
                    </Card.Body>
                </Card>
            </div>

            <div className='w-100 d-flex justify-content-center'>
                <Card className='bg-secondary text-light mt-4 text-center w-75 shadow-sm p-3 rounded rounded-3 border border-0'>
                    <Card.Body className='d-flex flex-column align-items-center justify-content-center'>

                        video
                    </Card.Body>
                </Card>
            </div>
            <hr className='' />
            <div className='mt-5'>
                <h5 className='title'>
                    Connect with us
                </h5>
                <p>hello@floatsolutionhub.com</p>
            </div>

            <div className='mt-3'>
                <h5 className='title'>
                Lagos
                </h5>
                <p>No 22 Providence Street
                Lekki, <br/>Lagos, Nigeria</p>
            </div>
        </div>
    )
}
export default HomePage;