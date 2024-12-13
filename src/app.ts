import express from "express";
import shortid from "shortid";
import { ETags } from "./enum/tag";

const app = express();
const PORT = 9000;

const trips = [
  {
    title: "คู่มือเที่ยว เกาะช้าง กิน เที่ยว พักที่ไหนดี อ่านจบครบที่เดียว!",
    eid: shortid,
    url: "https://www.wongnai.com/trips/travel-koh-chang",
    description: `จังหวัดตราด ที่มีประวัติอันยาวนาน ที่เที่ยวทะเลใกล้กรุงเทพฯ เคลียร์งานและวันว่างได้แล้วก็แค่จัดกระเป๋าไปกันได้เลยกับแพลน เที่ยวเกาะช้าง ต้องไปกิน เที่ยว พักที่ไหน? อ่านจบครบที่เดียว! ซึ่งหลายคนสงสัยว่าไปเกาะช้างเที่ยวไหนดี? 
      Wongnai Travel บอกเลยเกาะช้างไม่ได้มีแค่ไปเล่นน้ำทะเล หรือนอนพักริมหาดทรายเท่านั้น เพราะมีกิจกรรมสนุก ๆ รออยู่เพียบ ชนิดที่ไม่ว่างให้นอนอยู่ห้องเฉย ๆ อย่าง เที่ยวชมน้ำตก พายเรือคายัค ล่องเรือมาด ชมธรรมชาติป่าชายเลน 
      ขี่ช้างท่องป่า ตื่นเต้นกับการผจญภัยเหนือยอดไม้ ดำน้ำตื้นชมปะการังและฝูงปลาแบบใกล้ชิด นอกจากนี้ยังมีที่พักเกาะช้าง และร้านอาหารเกาะช้าง มาให้เลือกกันอีกด้วย รับรองทริปนี้กินอิ่ม นอนหลับ เที่ยวสนุกแน่นอน`,
    photos: [
      "https://img.wongnai.com/p/800x0/2019/07/02/41f84b5049cb49ef9b26f806360bd842.jpg",
      "https://img.wongnai.com/p/800x0/2019/07/02/d3ddf998db16487eae9d2de23e079103.jpg",
      "https://img.wongnai.com/p/800x0/2019/07/09/e9b0e146333a41a9b0f753cf89046c3c.jpg",
      "https://img.wongnai.com/p/800x0/2019/07/02/1b13de2267824701958e32ca0b800da2.jpg",
    ],
    tags: [ETags.KHO, ETags.TALE, ETags.VIEWPOINT, ETags.NATURAL, ETags.TRAD],
  },
  {
    title: "ลัดเลาะ 10 ที่เที่ยวย่าน BTS สายสีเขียว",
    eid: shortid,
    url: "https://www.wongnai.com/trips/new-bts-route-trips",
    description:
      "เริ่มกันที่ ‘สถานีห้าแยกลาดพร้าว’ เป็นสถานีที่เชื่อมกับเซ็นทรัลลาดพร้าว ซึ่งเป็นห้างที่เรียกได้ว่าครบจบในที่เดียว แต่เราไม่ได้จะพามาเที่ยวห้างหรอกนะ มาถึงนี่ทั้งทีเราจะพาไปทำกิจกรรมสายแอดเวนเจอร์สุดมันส์ และต่อด้วยหาร้านนั่งกินแก้เหนื่อยกันดีกว่า",
    photos: [
      "https://img.wongnai.com/p/1920x0/2020/02/26/fde1109a124b43c290d6d4bf25416ff1.jpg",
      "https://img.wongnai.com/p/800x0/2020/02/18/08bca1c784db4d7f92e93656b5376681.jpg",
      "https://img.wongnai.com/p/800x0/2020/02/18/95bd2ca371e24436bcb24d432a86836c.jpg",
      "https://img.wongnai.com/p/800x0/2020/02/18/343cd6514b2140d19eadea594d31f930.jpg",
    ],
    tags: [
      ETags.CAFE,
      ETags.COFFEESHOP,
      ETags.PHOTOSPOT,
      ETags.NEARMETRO,
      ETags.BANGKOK,
    ],
  },
  {
    title: "เที่ยวทุ่งทานตะวันชลบุรีได้รูปสวยไม่ต้องไปไกลที่ไร่คีรีบูรพา",
    eid: shortid,
    url: "https://www.wongnai.com/trips/ki-ri-burapha-sun-flower",
    description:
      "โดยที่เที่ยวทุ่งทานตะวันชลบุรี แห่งนี้ก็มีชื่อว่า “ไร่คีรีบูรพา” เดินทางไม่ยาก อยู่แค่ถนนเลียบเขา ตรงบ้านบึง เป็นที่เที่ยวชลบุรี เมื่อมาถึงเราก็จะเห็นทุ่งดอกทานตะวันที่เหลืองอร่ามพร้อมกับวิวภูเขาไกล ๆ สวยมาก และถ้ายิ่งมาช่วงเช้านะคะคุณขา ทานตะวันจะเงยหน้าสู้แดดโดยพร้อมเพรียงกัน เห็นแบบนี้แล้วก็รีบพุ่งตัวไปเลยจ๊ะ โดยค่าเข้าชม “ไร่คีรีบูรพา” แห่งนี้ก็แค่เพียง 20 บาทเท่านั้น! แถมที่มีจอดรถ มีห้องน้ำให้บริการด้วย ถูกเว่อร์",
    photos: [
      "https://img.wongnai.com/p/800x0/2019/12/27/777681c6184b498baead821895f7d7ab.jpg",
      "https://img.wongnai.com/p/800x0/2019/12/27/79e5b71efa54433b909e08bac13f27bb.jpg",
      "https://img.wongnai.com/p/800x0/2019/12/27/939f644df3d847409a85c1b2d054af25.jpg",
      "https://img.wongnai.com/p/800x0/2019/12/27/70651f2eec2c45e5bcb0f4e84d2f1b01.jpg",
    ],
    tags: [ETags.PHOTOSPOT, ETags.NICEPHOTO, ETags.NEARMETRO, ETags.CHONBURI],
  },
  {
    title:
      "เที่ยวสิ้นปี บ้านอีต่องเหมืองปิล็อก ชมหมอก กินหมูกระทะ ล่าทางช้างเผือก",
    eid: shortid,
    url: "https://www.wongnai.com/trips/travel-at-etong-pilok",
    description:
      "จังหวะ จะเที่ยว บ้านอีต่อง เหมืองปิล็อก ตามล่าทะเลหมอกหน้าหนาว เดินเที่ยวหมู่บ้านเหมืองเก่าน่ารัก กินหมูกระทะท้าลมหนาว รอดูทางช้างเผือก แล้วปิดทริปที่น้ำตก",
    photos: [
      "https://img.wongnai.com/p/1600x0/2019/12/25/183af5673b074e55a3842aca97676220.jpg",
      "https://img.wongnai.com/p/1600x0/2019/12/25/54961e4326954765a80cd20e2044083d.jpg",
      "https://img.wongnai.com/p/1600x0/2019/12/25/9bbcb032afc145d19e485defcf2067c1.jpg",
      "https://img.wongnai.com/p/1600x0/2019/12/25/2974828fdb16492da0e8f35f627ade7a.jpg",
    ],
    tags: [
      ETags.PHOTOSPOT,
      ETags.VILLAGE,
      ETags.MOUNTAIN,
      ETags.NATURAL,
      ETags.NICEPHOTO,
      ETags.PILOG,
      ETags.KANCHANABURI,
    ],
  },
  {
    title:
      "ทริปที่เที่ยวและร้านกาแฟเชียงใหม่ ที่สวยได้เเบบไม่ต้องไปไกลถึงเกาหลี",
    eid: shortid,
    url: "https://www.wongnai.com/trips/attraction-chiangmai-korea-style",
    description:
      "หลังจากดูซีรีส์จนตาแฉะเลยเกิดอยากจะเป็นโคเรียสไตล์กับเค้าบ้าง วันนี้เราเลยจะพาไปเที่ยวจุดถ่ายรูปเชียงใหม่ พร้อมร้านกาแฟเชียงใหม่ ที่ถ่ายภาพออกมาได้เหมือนอยู่เกาหลี ที่แต่ละร้านมีการตกแต่งและออกแบบได้ไม่ซ้ำใคร นอกจากจะพาไปจิบกาแฟถ่ายรูปแล้ว ก็จะพาไปชอปที่แหล่งนักท่องเที่ยวและแบบคนที่นี่เค้าซื้อของกันด้ว",
    photos: [
      "https://img.wongnai.com/p/800x0/2019/10/10/8453a8e8e8e942e489fe429af6956003.jpg",
      "https://img.wongnai.com/p/400x0/2019/10/10/d5f6385f430a4f9a91cdfc0cdb7ba3f5.jpg",
      "https://img.wongnai.com/p/800x0/2019/10/10/3092e773cda34ca2a77373b82f7639b7.jpg",
      "https://img.wongnai.com/p/800x0/2019/10/10/3ec80c37734340748b050b610baa1b61.jpg",
    ],
    tags: [
      ETags.PHOTOSPOT,
      ETags.NICEPHOTO,
      ETags.COFFEESHOP,
      ETags.CHIANGMAI,
      ETags.CAFE,
    ],
  },
  {
    title: "เที่ยวเกาะหลีเป๊ะ กิน เที่ยว พักที่ไหน? จัดมาให้ครบ!",
    eid: shortid,
    url: "https://www.wongnai.com/trips/travel-koh-lipe",
    description:
      "เที่ยวทะเลที่ไหนดี? เชื่อว่าคำตอบต้องมี “เกาะหลีเป๊ะ” เป็นหนึ่งในตัวเลือกแน่นอน เพราะที่เที่ยวสตูลแห่งนี้ขึ้นชื่อเรื่องความสวยงามของหาดทรายขาวและน้ำทะเลสวย จนกลายเป็นที่เที่ยวทะเลในฝันของหลายคน แต่จะเดินทางไปเที่ยวเกาะหลีเป๊ะยังไงดี? ใครยังไม่มีไอเดียก็ตามลายแทง เที่ยวเกาะหลีเป๊ะ กิน เที่ยว พักที่ไหน? จัดมาให้ครบ! อ่านจบเก็บกระเป๋าไปเที่ยวเกาะหลีเป๊ะได้เลย",
    photos: [
      "https://img.wongnai.com/p/800x0/2019/07/31/399273612f9f416b9aba14eb1ea28695.jpg",
      "https://img.wongnai.com/p/800x0/2019/07/31/79514bcc52714e5384e74bcddd300b09.jpg",
      "https://img.wongnai.com/p/800x0/2019/07/31/de527b258f5c40068c063af684c57e2e.jpg",
      "https://img.wongnai.com/p/800x0/2019/07/31/67795cd5f7da43b69aaa4c227f149c41.jpg",
    ],
    tags: [ETags.TALE, ETags.KHO, ETags.SATUL, ETags.NATURAL],
  },
  {
    title: "คู่มือเที่ยวไต้หวันง่ายๆ ฉบับ 2020 ฉลองต่อวีซ่าฟรี!",
    eid: shortid,
    url: "https://www.wongnai.com/trips/travel-around-taiwan-free-visa",
    description:
      "ทุกวันนี้แทบไม่มีใครไม่รู้จักชานมไข่มุก เครื่องดื่มขึ้นชื่อที่ฮิตกันไปทั่วบ้านทั่วเมือง หลังจากที่ได้ลองกินที่นี่แล้ว เราก็เลยอยากลองที่ต้นตำรับประเทศเขาบ้าง ทริปนี้จะพาไปกินชาไข่มุกที่ไต้หวัน พาไปเที่ยวไต้หวันทั้งในและนอกเมืองใหญ่ แล้วคุณจะรู้ว่า ประเทศนี้ไม่ได้มีดีแค่ชาไข่มุก! และที่สำคัญตอนนี้เขาใจดี ไต้หวันฟรีวีซ่า ต่อเวลาแห่งความสุข แล้วจะรอช้าอยู่ไย วางแพลนเที่ยวไต้หวันกัน!",
    photos: [
      "https://img.wongnai.com/p/1920x0/2019/07/11/cefadd52a1424562bddf0d8fb4762d38.jpg",
      "https://img.wongnai.com/p/1920x0/2019/07/11/c28e0c08507141aaaa4dbe77b89392b7.jpg",
      "https://img.wongnai.com/p/1920x0/2019/07/11/13bad0f884114ab5b131681654e26677.jpg",
      "https://img.wongnai.com/p/1920x0/2019/07/11/d85f53ad667d43538a28b36d00bd7aee.jpg",
    ],
    tags: [ETags.PHOTOSPOT, ETags.ABORAD, ETags.TAIWAN, ETags.NATURAL],
  },
  {
    title: "เที่ยวญี่ปุ่นไปกับภูเขาไฟชื่อดังให้สุดฟินจาก 15 มุมสุดงาม~",
    eid: shortid,
    url: "https://www.wongnai.com/trips/views-around-fuji",
    description:
      "จะมาเที่ยวญี่ปุ่นกี่ครั้งแล้วก็ตาม การไปเที่ยวภูเขาไฟฟูจิก็เป็นหนึ่งในจุดหมายปลายทางที่เที่ยวซ้ำได้เรื่อย ๆ เพราะความสวยงามแบบเวรี่เจแปนนีสที่เปลี่ยนไปตามฤดู สำหรับครั้งแรก ส่วนมากไปประเดิมกันที่ทะเลสาบ Kawaguchiko หรือ Hakone แต่ภูเขาไฟฟูจิยังมีมุมสวยอีกมากมาย เราจึงรวบรวมจุดชมวิวภูเขาไฟชื่อดังแห่งนี้ไว้ 15 แห่งหลายสไตล์ตั้งแต่ใกล้มากจนถึงไกลมาก รวมครบเบสิกใสใสไปง่าย อย่างฟูจิกับทะเลสาบ Kawaguchiko และมุม Unseen อย่างภูเขาไฟฟูจิกับทุ่งชาเขียวหรือการชมภูเขาไฟฟูจิจากสะพานแขวนที่ยาวที่สุดในประเทศ!",
    photos: [
      "https://img.wongnai.com/p/800x0/2019/06/04/935bf82b1ec94abf890d63c995d5b17b.jpg",
      "https://img.wongnai.com/p/800x0/2019/06/04/fe55d8ed03c74c86a44de4c43818e8b9.jpg",
      "https://img.wongnai.com/p/800x0/2019/06/04/efefc1e6c1994dbf8461f7e177e9b0f9.jpg",
      "https://img.wongnai.com/p/800x0/2019/06/04/c177852ea73e4ccaa0453c491828f95c.jpg",
    ],
    tags: [
      ETags.PHOTOSPOT,
      ETags.ABORAD,
      ETags.JAPAN,
      ETags.NATURAL,
      ETags.MOUNTAIN,
    ],
  },
  {
    title: "เที่ยวฝรั่งเศส เช็กอินเมืองในฝัน เก็บแลนด์มาร์กสุดปังในปารีส",
    eid: shortid,
    url: "https://www.wongnai.com/trips/travel-around-paris-france",
    description:
      "สำหรับใครที่ชอบที่เที่ยวแนวสถาปัตยกรรม ร้านอาหารสวย ๆ และชอปปิงของแบรนด์เนมเราขอแนะนำ “เที่ยวฝรั่งเศส เช็กอินเมืองในฝัน เก็บแลนด์มาร์กสุดปังในปารีส” เพราะตอบโจทย์สุด ๆ ไปเลย รวมมาให้แล้วกับที่เที่ยวดังต่าง ๆ ทั้งหอไอเฟล พิพิธภัณฑ์ลูฟวร์ และ Disneyland แบบว่าแต่งตัวสวย ๆ เดินถ่ายรูป ชมวิว ทานอาหารไปเรื่อย ๆ เหมาะอย่างยิ่งกับสายชิล เน้นพักผ่อน ส่วนสายลุย สายธรรมชาติข้ามเลยจ้า",
    photos: [
      "https://img.wongnai.com/p/400x0/2019/05/23/6678d0a6c1ab44d5a72c972385334c33.jpg",
      "https://img.wongnai.com/p/400x0/2019/05/23/6651fc0beee34553b726a99cd0ab3301.jpg",
      "https://img.wongnai.com/p/400x0/2019/05/23/4057d08671744f8e8fd9e939b5e60087.jpg",
      "https://img.wongnai.com/p/800x0/2019/05/23/7a677ee703ab448b9ca20c847aa74ce3.jpg",
    ],
    tags: [ETags.PHOTOSPOT, ETags.ABORAD, ETags.FRANCE],
  },
  {
    title: "เที่ยวฟินแลนด์แบบฟินๆไปฟาร์ม Husky ขี่ Reindeer เล่น Snowmobile",
    eid: shortid,
    url: "https://www.wongnai.com/trips/trip-at-finland",
    description:
      "หน้าหนาวนี้ใครไม่รู้จะไปเที่ยว ที่เที่ยวต่างประเทศที่ไหนดี แนะนำว่าเตรียมเสื้อผ้าให้พร้อมแล้วไปเที่ยวฟินแลนด์ท้าลมหนาวอุณหภูมิติดลบ Feel like -20 กันเลยค่ะ งานนี้บอกเลยว่านั่งเครื่องยาวมากเวอร์ 10 ชั่วโมงบวก ๆ แล้วแต่สายการบิน สำหรับใครที่กลัวว่าจะเหนื่อยเกินไป แนะนำให้แวะยืดเส้นยืดสายที่เที่ยวยุโรปหรือที่เที่ยวต่างประเทศอื่น ๆ ก่อน แล้วค่อยต่อเครื่องมาเที่ยวฟินแลนด์ก็ได้นะคะ",
    photos: [
      "https://img.wongnai.com/p/800x0/2019/05/21/cd54e9c640694a95b7e0103b0ead5408.jpg",
      "https://img.wongnai.com/p/800x0/2019/05/21/1f1b28fc86b64fa08db3a2f262f2e42a.jpg",
      "https://img.wongnai.com/p/800x0/2019/05/21/91cf0e4cd54448a8998689304c176282.jpg",
      "https://img.wongnai.com/p/800x0/2019/05/21/66403ed74f814db081bc544488d71146.jpg",
    ],
    tags: [ETags.ABORAD, ETags.FINLAND, ETags.SNOW, ETags.NATURAL],
  },
];

app.get("/trips", (req, res) => {
  console.log(res);
  res.json(trips);
});

app.listen(PORT, () => {
  console.log(`JSON Serverrunning on http://localhost:${PORT}`);
});
