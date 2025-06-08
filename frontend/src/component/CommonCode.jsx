import React from 'react'
export const CommonCode = ({ clscond,title }) => {
    return (
        <div className="home-section">
            <div className="container">
            {/* flex-column-reverse */}
                <div className="row align-items-center col-box">
                    <div className="col-12 col-md-6">
                        <div className="home-info">
                             {clscond === 'about-section' ? 
                            <h2>{title}</h2> :
                            <h2>Hello I am <span>Web Developer</span> for create UI</h2>
                             }
                            <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eaque dolor saepe officia esse? Maiores dolor molestias non obcaecati nobis consequuntur corrupti minus earum, id accusantium, officiis debitis cum tempore sunt, veritatis aspernatur soluta ratione error sequi ipsum. Hic dicta at minima facilis, corrupti dolorem quos, omnis itaque eveniet, doloribus blanditiis accusamus fuga quisquam enim sapiente.</p>
                            {clscond === 'about-section' ? <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eaque dolor saepe officia esse? Maiores dolor molestias non obcaecati nobis consequuntur corrupti minus earum, id accusantium, officiis debitis cum tempore sunt, veritatis aspernatur soluta ratione error sequi ipsum. Hic dicta at minima facilis, corrupti dolorem quos, omnis itaque eveniet, doloribus blanditiis accusamus fuga quisquam enim sapiente.</p> : null}
                            {clscond === 'about-section' ? <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eaque dolor saepe officia esse? Maiores dolor molestias non obcaecati nobis consequuntur corrupti minus earum, id accusantium, officiis debitis cum tempore sunt, veritatis aspernatur soluta ratione error sequi ipsum. Hic dicta at minima facilis, corrupti dolorem quos, omnis itaque eveniet, doloribus blanditiis accusamus fuga quisquam enim sapiente.</p> : null}
                            <button className='btn btn-primary'>Read More</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="home-img">
                            <img src='images/logodesc.webp' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
