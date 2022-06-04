// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: object[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    data: [
      {
        id: 1,
        icon_name: "comedores",
        title_text: "Comedores",
        description_text: "Encuentra los comedores que estás buscando en un solo lugar. Tenemos desde mesas y sillas, hasta juegos de comedor en el diseño que buscas, elaborados en cedro, teka, flor morado de excelente calidad, para espacios inspiradores en tu hogar.",
        category: 'dining-rooms',
        photo_ppal: [
          "/images/dining-rooms/craftsmen-dining-room-2c935c9481628ab51d97929eaa1df279.jpg",
          "/images/dining-rooms/craftsmen-dining-room-725f8804529d0c810a099e8bc158f5c7.jpg",
          "/images/dining-rooms/craftsmen-dining-room-6877baf3c1da144feafc1d7ca8a5c924.jpg",
          "/images/dining-rooms/craftsmen-dining-room-e225bd65f3e993a10b3a8784c8b91610.jpg",
        ],
        photo_gallery: [
          "/images/dining-rooms/craftsmen-dining-room-4c89b1ad3669c2353e97622b3e835a54.jpg",
          "/images/dining-rooms/craftsmen-dining-room-6a2e0382bedeac30873244905a145b3c.jpg",
          "/images/dining-rooms/craftsmen-dining-room-eaa2de3a5523be07bf4ee4ed229e5057.jpg",
          "/images/dining-rooms/craftsmen-dining-room-d56e7f1cdc0a4828042b850716d38af6.jpg",
          "/images/dining-rooms/craftsmen-dining-room-ec282174d568f77fd9f710987941bbc4.jpg",
          "/images/dining-rooms/craftsmen-dining-room-3a27cbf6a0ef3aad4b1ad4ae2e69c00d.jpg",
          "/images/dining-rooms/craftsmen-dining-room-2c935c9481628ab51d97929eaa1df279.jpg",
          "/images/dining-rooms/craftsmen-dining-room-78c4dd4ff74c714a97e69a9f1c4b546f.jpg",
          "/images/dining-rooms/craftsmen-dining-room-725f8804529d0c810a099e8bc158f5c7.jpg",
          "/images/dining-rooms/craftsmen-dining-room-2853f2843b803b045b65059a331a3923.jpg",
          "/images/dining-rooms/craftsmen-dining-room-6877baf3c1da144feafc1d7ca8a5c924.jpg",
          "/images/dining-rooms/craftsmen-dining-room-be3353dc5611bcee2d1da63f987d3047.jpg",
          "/images/dining-rooms/craftsmen-dining-room-e225bd65f3e993a10b3a8784c8b91610.jpg",
          "/images/dining-rooms/craftsmen-dining-room-f0f1ea1c032cd22333efa97fb7ba9ee0.jpg",
          "/images/dining-rooms/craftsmen-dining-room-2h9CMGYwgo.jpeg",
          "/images/dining-rooms/craftsmen-dining-room-cSwANz8DGp.jpeg",
          "/images/dining-rooms/craftsmen-dining-room-JXnDvoP2la.jpeg",
          "/images/dining-rooms/craftsmen-dining-room-lNnc1jmVj5.jpeg",
          "/images/dining-rooms/craftsmen-dining-room-qmG3Bz2zLe.jpeg",
          "/images/dining-rooms/craftsmen-dining-room-XDzmzYEEkO.jpeg",
        ],
      },
      {
        id: 2,
        icon_name: "salas",
        title_text: "Salas",
        description_text: "Asesoría personalizada lo que estabas buscando para tu sala, descubre los mejores diseños en sofás, mesas, poltronas y más. ",
        category: 'living-rooms',
        photo_ppal: [
          "/images/living-rooms/craftsmen-living-room-0d41f7f7d430f895b752a402140f3bfc.jpg",
          "/images/living-rooms/craftsmen-living-room-98bc532cfaad06be0542ee73e7f12d24.jpg",
          "/images/living-rooms/craftsmen-living-room-682262f005647710f8eecbc8a9034e88.jpg",
          "/images/living-rooms/craftsmen-living-room-aed8b5cdcb6cbccda9e913460e7cd5e1.jpg",
        ],
        photo_gallery: [
          "/images/living-rooms/craftsmen-living-room-3eaa5e9b1e8fd7a6a80be00db3b98ef1.jpg",
          "/images/living-rooms/craftsmen-living-room-4cc60779b40b3763431e845b4b2b4a09.jpg",
          "/images/living-rooms/craftsmen-living-room-8ab619e4453784d1cb2ebfec01ae5d7d.jpg",
          "/images/living-rooms/craftsmen-living-room-94f6f1524d5092ce4734af1160d81523.jpg",
          "/images/living-rooms/craftsmen-living-room-c5db775d562e76d8a7cb0012eefc0c75.jpg",
          "/images/living-rooms/craftsmen-living-room-0d41f7f7d430f895b752a402140f3bfc.jpg",
          "/images/living-rooms/craftsmen-living-room-5fe320e48b424206c975915dd5c631fb.jpg",
          "/images/living-rooms/craftsmen-living-room-98bc532cfaad06be0542ee73e7f12d24.jpg",
          "/images/living-rooms/craftsmen-living-room-154a20be96294f7e2e1c56e1ed042490.jpg",
          "/images/living-rooms/craftsmen-living-room-682262f005647710f8eecbc8a9034e88.jpg",
          "/images/living-rooms/craftsmen-living-room-a8115fe708959d065e9ffeba7f562911.jpg",
          "/images/living-rooms/craftsmen-living-room-aed8b5cdcb6cbccda9e913460e7cd5e1.jpg",
          "/images/living-rooms/craftsmen-living-room-0FpoVAKRMz.jpeg",
          "/images/living-rooms/craftsmen-living-room-0wsJAl1pXs.jpeg",
          "/images/living-rooms/craftsmen-living-room-CF7jMl8JM2.jpeg",
          "/images/living-rooms/craftsmen-living-room-DTRbXNvn5J.jpeg",
          "/images/living-rooms/craftsmen-living-room-IsdARe3PgR.jpeg",
          "/images/living-rooms/craftsmen-living-room-k5qhFOoRix.jpeg",
          "/images/living-rooms/craftsmen-living-room-rzANBu2hxo.jpeg",
        ],
      },
      {
        id: 3,
        icon_name: "dormitorios",
        title_text: "Dormitorios",
        description_text: "Disfruta de excelentes dormitorios juveniles, matrimoniales e infantiles y mucho más, encuentra en nuestros dormitorios todo el concepto de diseño para tu habitación que has deseado.",
        category: 'bedrooms',
        photo_ppal: [
          "/images/bedrooms/craftsmen-bedroom-2ecad08b9ffe92aa0bbe6fb5443a1d75.jpg",
          "/images/bedrooms/craftsmen-bedroom-4403209e7e918d2889cc7d29cca2d1e4.jpg",
          "/images/bedrooms/craftsmen-bedroom-ddc7c0d0cc74d943eadf75b8cf7f5a91.jpg",
          "/images/bedrooms/craftsmen-bedroom-ed2992cb9c2466e4eda8691012941cac.jpg",
        ],
        photo_gallery: [
          "/images/bedrooms/craftsmen-bedroom-3d0e150a88c1b0417ae4936cd6c6db5b.jpg",
          "/images/bedrooms/craftsmen-bedroom-8ff5f274ff5809f8f8e2d1a1a0154e21.jpg",
          "/images/bedrooms/craftsmen-bedroom-0876a6438ed1536f7df8c861dab05ec9.jpg",
          "/images/bedrooms/craftsmen-bedroom-119859b52b3ebb4f8f246d4afcc9c328.jpg",
          "/images/bedrooms/craftsmen-bedroom-401068b0be6c298f67871118de276b7c.jpg",
          "/images/bedrooms/craftsmen-bedroom-a08e27c0bbb982624ad06d0e461651dc.jpg",
          "/images/bedrooms/craftsmen-bedroom-aa5e1c402bc2ade99b9d3733d29594cb.jpg",
          "/images/bedrooms/craftsmen-bedroom-c1fd2ede8b04cb9f871a725b309c3d3f.jpg",
          "/images/bedrooms/craftsmen-bedroom-c66fc6d8a313f98da8d7c3a4a5e4c06f.jpg",
          "/images/bedrooms/craftsmen-bedroom-2ecad08b9ffe92aa0bbe6fb5443a1d75.jpg",
          "/images/bedrooms/craftsmen-bedroom-3f7a5f5e1c766275f7269106bea41079.jpg",
          "/images/bedrooms/craftsmen-bedroom-4403209e7e918d2889cc7d29cca2d1e4.jpg",
          "/images/bedrooms/craftsmen-bedroom-07062533d179ea924650c288055ac057.jpg",
          "/images/bedrooms/craftsmen-bedroom-ddc7c0d0cc74d943eadf75b8cf7f5a91.jpg",
          "/images/bedrooms/craftsmen-bedroom-ed2992cb9c2466e4eda8691012941cac.jpg",
          "/images/bedrooms/craftsmen-bedroom-aoXlB17ZoL.jpeg",
          "/images/bedrooms/craftsmen-bedroom-JT2YSpr0eh.jpeg",
          "/images/bedrooms/craftsmen-bedroom-LU5GOOouU5.jpeg",
          "/images/bedrooms/craftsmen-bedroom-sLhJ6ck3Hv.jpeg",
          "/images/bedrooms/craftsmen-bedroom-U4fJfqVKrD.jpeg",
        ],
      },
      {
        id: 4,
        icon_name: "estudios",
        title_text: "Estudios",
        description_text: "¡Desde casa ahora es más fácil!, Si trabajas o estudias en casa necesitas una zona de trabajo bien equipada, decorada y organizada, aquí encontrarás todo lo que necesitas para tu hogar.",
        category: 'study-rooms',
        photo_ppal: [
          "/images/study-rooms/craftsmen-study-room-8d66e64ff3c472f48af68c82707c35a3.jpg",
          "/images/study-rooms/craftsmen-study-room-b4a9f4a0477d22d53c22833947c6f898.jpg",
          "/images/study-rooms/craftsmen-study-room-d67e8ca13607eb02dd7be97c9b18cc4c.jpg",
          "/images/study-rooms/craftsmen-study-room-e104252820369a93608b4143389b5a5c.jpg",
        ],
        photo_gallery: [
          "/images/study-rooms/craftsmen-study-room-14e383254899e39394e7b498298ae4c7.jpg",
          "/images/study-rooms/craftsmen-study-room-666baee2a15dd2ca55809a46a70a3b87.jpg",
          "/images/study-rooms/craftsmen-study-room-806d870c300e910a320e03dc7fe28e2e.jpg",
          "/images/study-rooms/craftsmen-study-room-a3936c1e32bac5e5ad0b261d5397f845.jpg",
          "/images/study-rooms/craftsmen-study-room-c5fa414195b08b0c8be30670259ad0b2.jpg",
          "/images/study-rooms/craftsmen-study-room-c6e9dff0d86c1845441fd4f24424c83d.jpg",
          "/images/study-rooms/craftsmen-study-room-cb8ccfe6f86f986f8d359f56e3ef5cee.jpg",
          "/images/study-rooms/craftsmen-study-room-8d66e64ff3c472f48af68c82707c35a3.jpg",
          "/images/study-rooms/craftsmen-study-room-84df628c088e80c8997b662fc980f5ad.jpg",
          "/images/study-rooms/craftsmen-study-room-b4a9f4a0477d22d53c22833947c6f898.jpg",
          "/images/study-rooms/craftsmen-study-room-cf386aeb5e0321e47614ae0cd5571a44.jpg",
          "/images/study-rooms/craftsmen-study-room-d67e8ca13607eb02dd7be97c9b18cc4c.jpg",
          "/images/study-rooms/craftsmen-study-room-db78add921ec673ffb8cd069d4592246.jpg",
          "/images/study-rooms/craftsmen-study-room-e104252820369a93608b4143389b5a5c.jpg",
          "/images/study-rooms/craftsmen-study-room-fa8d95b0820cc5cb573b3d362cfb0ac9.jpg",
          "/images/study-rooms/craftsmen-study-room-aBS2H99nUh.jpeg",
          "/images/study-rooms/craftsmen-study-room-BoByiGLQUd.jpeg",
          "/images/study-rooms/craftsmen-study-room-ePDBEy8LNo.jpeg",
          "/images/study-rooms/craftsmen-study-room-fLbuVnUmjm.jpeg",
          "/images/study-rooms/craftsmen-study-room-kueFpOEGqU.jpeg",
        ],
      },
      {
        id: 5,
        icon_name: "cocinas",
        title_text: "Cocinas",
        description_text: "Encuentra con nosotros cocinas para tu hogar, Estas se componen de diferentes muebles los cuales puedes modular segun tu espacio y diseño personalizados, innovadores, únicos y funcionales de alta calidad.",
        category: 'kitchens',
        photo_ppal: [
          '/images/kitchens/craftsmen-kitchen-6d20bf63a9caea415a14f1ed598218de.jpg',
          '/images/kitchens/craftsmen-kitchen-34d5441893fefb8afc5730f611d69222.jpg',
          '/images/kitchens/craftsmen-kitchen-0cc2b608eaf2e095ce5b103b4193d95d.jpg',
          '/images/kitchens/craftsmen-kitchen-2520a1cf2a617ac95fd9ad53d0c05dfc.jpg'
        ],
        photo_gallery: [
          "/images/kitchens/craftsmen-kitchen-64afea6cc6017191a209e78c27df98d8.jpg",
          "/images/kitchens/craftsmen-kitchen-cc5f36acd462a89fbffd3fe5ea835dad.jpg",
          "/images/kitchens/craftsmen-kitchen-93d8db763269e9c3488f7157191f9a6e.jpg",
          "/images/kitchens/craftsmen-kitchen-4ad4694f8c09d879b0cf253ee565744f.jpg",
          "/images/kitchens/craftsmen-kitchen-7ba0472894b58c4c0bd4e5774d305a0b.jpg",
          "/images/kitchens/craftsmen-kitchen-74f4a65b75203fab9787ab278505b5e5.jpg",
          "/images/kitchens/craftsmen-kitchen-f781bc8dd840ca399826b20d88236922.jpg",
          "/images/kitchens/craftsmen-kitchen-81e653b8d05b9cd415b8a2200a68a326.jpg",
          "/images/kitchens/craftsmen-kitchen-e64e302f6317d97fef9c05f83eb7127b.jpg",
          "/images/kitchens/craftsmen-kitchen-de08132dbf759b12f957e476276336fc.jpg",
          "/images/kitchens/craftsmen-kitchen-a6a3f90709bc5bb4169ae5060c1b084d.jpg",
          "/images/kitchens/craftsmen-kitchen-9c2443038be9a1973aceb8bc39138492.jpg",
          "/images/kitchens/craftsmen-kitchen-0cc2b608eaf2e095ce5b103b4193d95d.jpg",
          "/images/kitchens/craftsmen-kitchen-6d20bf63a9caea415a14f1ed598218de.jpg",
          "/images/kitchens/craftsmen-kitchen-34d5441893fefb8afc5730f611d69222.jpg",
          "/images/kitchens/craftsmen-kitchen-417a9172eaea391b41df173f97401eda.jpg",
          "/images/kitchens/craftsmen-kitchen-894e70f9d3ce0ea84e9ec9860bc014ea.jpg",
          "/images/kitchens/craftsmen-kitchen-2520a1cf2a617ac95fd9ad53d0c05dfc.jpg",
          "/images/kitchens/craftsmen-kitchen-9458f2a597db4d3c7a41350bfd1745ff.jpg",
          "/images/kitchens/craftsmen-kitchen-db15388c83713477691269dbf9a255ed.jpg",
        ],
      },
      {
        id: 6,
        icon_name: "exteriores",
        title_text: "Exteriores",
        description_text: "Extiende tu hogar y utiliza tus espacios al aire libre para relajarte, cenar o pasar un buen momento con tus seres queridos. Y por supuesto, tus espacios exteriores deben tener tanto estilo como tus espacios interiores.",
        category: 'exteriors',
        photo_ppal: [
          '/images/exteriors/craftsmen-exterior-94ab14be2ded4aecb4be45c8c93f3e5f.jpg',
          '/images/exteriors/craftsmen-exterior-c1b0eb653abf2d3368f3d029497fc56b.jpg',
          '/images/exteriors/craftsmen-exterior-0b0a53dadf18d438ade59aac1e10283a.jpg',
          '/images/exteriors/craftsmen-exterior-2b5e0a2353988e79ea8d5e6ad14b71cd.jpg'
        ],
        photo_gallery: [
          "/images/exteriors/craftsmen-exterior-7a5ea4ba4d9fa533b4d8605f00c6065a.jpg",
          "/images/exteriors/craftsmen-exterior-1ccc11476b87240a04ec82db3fea2efb.jpg",
          "/images/exteriors/craftsmen-exterior-db96bb76cee6a0381e8f2d32be693e00.jpg",
          "/images/exteriors/craftsmen-exterior-478f345a0dd7431820a07f1fd109f469.jpg",
          "/images/exteriors/craftsmen-exterior-d1eaf4ec29cb95dc22497c55634228fa.jpg",
          "/images/exteriors/craftsmen-exterior-a3afcb14c062638ea2d6c72001ba758c.jpg",
          "/images/exteriors/craftsmen-exterior-d130bab0141cce0e26e13da377499d4b.jpg",
          "/images/exteriors/craftsmen-exterior-aa3d50025e7f6f29f27fde7aeac79feb.jpg",
          "/images/exteriors/craftsmen-exterior-4fc37f05f62bf2f8937287e439a35bde.jpg",
          "/images/exteriors/craftsmen-exterior-073e8566d0e928599ba6d75f068ac2eb.jpg",
          "/images/exteriors/craftsmen-exterior-85053421b46b5bce98db9a64d3f924ad.jpg",
          "/images/exteriors/craftsmen-exterior-3459513a09b2647dcf37e443ae5c3c78.jpg",
          "/images/exteriors/craftsmen-exterior-0b0a53dadf18d438ade59aac1e10283a.jpg",
          "/images/exteriors/craftsmen-exterior-2b5e0a2353988e79ea8d5e6ad14b71cd.jpg",
          "/images/exteriors/craftsmen-exterior-5bee411f69dac30578a9a5c59c77d70d.jpg",
          "/images/exteriors/craftsmen-exterior-14dd637e984036aa49aa7014dbb50ea7.jpg",
          "/images/exteriors/craftsmen-exterior-67c6711216acea8346cfafcfaf4929f3.jpg",
          "/images/exteriors/craftsmen-exterior-94ab14be2ded4aecb4be45c8c93f3e5f.jpg",
          "/images/exteriors/craftsmen-exterior-c1b0eb653abf2d3368f3d029497fc56b.jpg",
          "/images/exteriors/craftsmen-exterior-da8b2e1b799ef2530be20483d7438cd2.jpg",
        ],
      }
    ]
  })
}
