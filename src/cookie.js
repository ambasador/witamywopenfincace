import React from 'react';
import CookieBanner, { BannerContent, cookie } from 'react-cookie-banner';
import css from './cookie.css';

cookie('accepts-cookies', '');

class Cookie extends React.Component {

    state = {
        dismissOnScroll: true
    }

    resetCookies = () => {
        cookie('accepts-cookies', '');
        this.refresh();
    }

    toggleDismissOnScroll = () => {
        this.setState({ dismissOnScroll: !this.state.dismissOnScroll });
    }

    refresh = () => {
        this.setState({});
    }

    render() {

        const {
            refresh, toggleDismissOnScroll, resetCookies,
            state: { dismissOnScroll }
        } = this;

        const cookieProps = {
            dismissOnScroll,
            onAccept: refresh
        };

        const bannerContentProps = {
            styles: { button: { color: 'blue' } },
            message: 'your own custom message',
            link: { msg: 'link to cookie policy', url: 'http://nocookielaw.com/' },
            buttonMessage: 'close button message'
        };

        return (
            <div className="Cookie">

                <CookieBanner {...cookieProps}>
                    {(onAccept) => (
                        <div onClick={onAccept}>
                            <BannerContent {...bannerContentProps} onAccept={onAccept} />
                        </div>
                    )}
                </CookieBanner>


            </div>
        );
    }

}

export default Cookie;