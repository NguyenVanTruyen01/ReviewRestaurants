import React from "react";
import './NotFoundPage.scss'
import {Link} from "react-router-dom";

const NotFoundPage =()=>{
    return(
        <div className="PageNotFound">
            <div className="body">
                <div>
                    <aside><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png" alt="404 Image" />
                    </aside>
                    <main>
                        <h1>Sorry!</h1>
                        <p>
                           Không thể truy cập vào trang này hoặc nó không tồn tại <em>. . . Vui lòng về trang chủ.</em>
                        </p>
                        <button><Link to='/home'>GO TO HOME PAGE</Link></button>
                    </main>
                </div>
            </div>

        </div>
    )
}

export default NotFoundPage