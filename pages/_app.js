import Head from 'next/head';
import { AuthUserProvider } from '../context/authUserContext';
import { ToastContainer } from 'react-toastify';
import CodeInputModal from "../components/codeInputModal";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { CookiesProvider } from "react-cookie";
import NextNProgress from 'nextjs-progressbar';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/stripeFormStyles.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  

  useEffect(() => {
    //console.log("reading use effect");
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          //console.log('Service Worker registered with scope:', registration.scope);

          // Request permission for push notifications
          return registration.pushManager.getSubscription().then(subscription => {
            if (subscription === null) {
              return registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: 'BEyd8mqBYfPUB5gXlbRQbKJltxAJS0w4m7tGMGiu2iVy4MZxPLZlvBltJi7D1zyNY1uCvQfd9i_5lW1vvJCrW1s', // Replace with your VAPID public key
              });
            }
          });
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    }

    // Trigger push notification when accessing the specified URL
    //console.log("url comming");
    //console.log(router.pathname);
    if (router.pathname === '/notification') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          // Trigger a push notification
          //console.log("permision granted");
          navigator.serviceWorker.ready.then(registration => {
            registration.showNotification('Notification Title', {
              body: 'Test', // Customize the notification content
              
            });
          });
        }
      });
    }
  }, [router.pathname]);

  return (
    <>
      <Head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-GPC84LQ3Q8"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GPC84LQ3Q8');
          `,
        }}
      ></script>
     
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,a){if(!a.__SV){var b=window;try{var d,m,j,k=b.location,f=k.hash;d=function(a,b){return(m=a.match(RegExp(b+"=([^&]*)")))?m[1]:null};f&&d(f,"fpState")&&(j=JSON.parse(decodeURIComponent(d(f,"fpState"))),"fpeditor"===j.action&&(b.sessionStorage.setItem("_fpcehash",f),history.replaceState(j.desiredHash||"",c.title,k.pathname+k.search)))}catch(n){}var l,h;window.freshpaint=a;a._i=[];a.init=function(b,d,g){function c(b,i){var a=i.split(".");2==a.length&&(b=b[a[0]],i=a[1]);b[i]=function(){b.push([i].concat(Array.prototype.slice.call(arguments,
              0)))}}var e=a;"undefined"!==typeof g?e=a[g]=[]:g="freshpaint";e.people=e.people||[];e.toString=function(b){var a="freshpaint";"freshpaint"!==g&&(a+="."+g);b||(a+=" (stub)");return a};e.people.toString=function(){return e.toString(1)+".people (stub)"};l="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove people group page alias ready addEventProperties addInitialEventProperties removeEventProperty addPageviewProperties".split(" ");
              for(h=0;h<l.length;h++)c(e,l[h]);var f="set set_once union unset remove delete".split(" ");e.get_group=function(){function a(c){b[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));e.push([d,call2])}}for(var b={},d=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<f.length;c++)a(f[c]);return b};a._i.push([b,d,g])};a.__SV=1.4;b=c.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof FRESHPAINT_CUSTOM_LIB_URL?
              FRESHPAINT_CUSTOM_LIB_URL:"//perfalytics.com/static/js/freshpaint.js";(d=c.getElementsByTagName("script")[0])?d.parentNode.insertBefore(b,d):c.head.appendChild(b)}})(document,window.freshpaint||[]);
              freshpaint.init("f26c8c5b-16a2-4205-b479-c26849abc54b");
              freshpaint.page();
            `,
          }}
        />
        {/* Meta Pixel Code */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '694668752687982');
          fbq('track', 'PageView');
          `
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=694668752687982&ev=PageView&noscript=1"
        />
      </noscript>
      {/* End Meta Pixel Code */}

      {/* Many Chats Code */}
      <script src="//widget.manychat.com/1145679_068ff.js" defer="defer"></script>
      <script src="https://mccdn.me/assets/js/widget.js" defer="defer"></script>
      {/* End Many Chats Code */}
        
      </Head>
      <AuthUserProvider>
        <NextNProgress color="#09d08c" />
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          closeOnClick
          pauseOnHover
        />
        <CodeInputModal />
      </AuthUserProvider>
    </>
  )
}

export default MyApp;

