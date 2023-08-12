import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <div className="footer__intro">
          <div className="footer__intro__title">
            <h3>شرکت زرین پرک</h3>
          </div>
          <div className="footer__intro__text">
            گروه صنایع گلخانه ای سپیدسازه با هدف تجهیز و گسترش گلخانه های مدرن
            در سال 1379 تاسیس شد. این شرکت فعالیت خود را با ساخت گلخانه های پیش
            ساخته تجاری و تحقیقاتی آغاز نمود و با پیشرفت در این حوزه وارد عرصه
            ساخت گلخانه های خانگی و تجهیزات گلخانه ای گردید.
          </div>
        </div>
        <div className="footer__address">
          <div className="footer__address__title">آدرس</div>
          <div className="footer__address__text">
            استان تهران،شهرستان اسلامشهر، احمدآباد مستوفی، خیابان لاله های
            انقلاب 8، خیابان ولیعصرشمالی، پلاک 153، طبقه همکف
          </div>
        </div>
        <div className="footer__media">
          <div className="footer__media__title">کانال های ارتباطی</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
