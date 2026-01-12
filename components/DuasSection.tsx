
import React from 'react';

interface Props {
  selectedDay: number;
}

const RAMADAN_DUAS = [
  {
    arabic: "اللَّهُمَّ اجْعَلْ صِيَامِي فِيهِ صِيَامَ الصَّائِمِينَ، وَقِيَامِي فِيهِ قِيَامَ الْقَائِمِينَ",
    transliteration: "Allahummaj-'al siyami fihi siyamas-sa'imeen, wa qiyami fihi qiyamal-qa'imeen",
    translation: "O Allah, let my fasting in it be the fasting of the true fasters, and my standing for prayer in it be the standing of the true standers."
  },
  {
    arabic: "اللَّهُمَّ قَرِّبْنِي فِيهِ إِلَى مَرْضَاتِكَ، وَجَنِّبْنِي فِيهِ مِنْ سَخَطِكَ وَنَقِمَاتِكَ",
    transliteration: "Allahumma qarribni fihi ila mardhatika, wa jannibni fihi min sakhatika wa naqimatik",
    translation: "O Allah, draw me near in this day to Your pleasure, and keep me away from Your anger and punishment."
  },
  {
    arabic: "اللَّهُمَّ ارْزُقْنِي فِيهِ ذِهْناً وَتَنْبِيهاً، وَبَاعِدْنِي فِيهِ مِنَ السَّفَاهَةِ وَالتَّمْويهِ",
    transliteration: "Allahummar-zuqni fihi dhihnan wa tanbeeha, wa ba'idni fihi minas-safahati wat-tamweeh",
    translation: "O Allah, grant me wisdom and awareness, and keep me away from ignorance and deception."
  },
  {
    arabic: "اللَّهُمَّ قَوِّنِي فِيهِ عَلَى إِقَامَةِ أَمْرِكَ، وَأَذِقْنِي فِيهِ حَلاوَةَ ذِكْرِكَ",
    transliteration: "Allahumma qawwini fihi 'ala iqamati amrika, wa adhiqni fihi halawata dhikrik",
    translation: "O Allah, strengthen me to carry out Your commands, and let me taste the sweetness of Your remembrance."
  },
  {
    arabic: "اللَّهُمَّ اجْعَلْنِي فِيهِ مِنَ الْمُسْتَغْفِرِينَ، وَاجْعَلْنِي فِيهِ مِنْ عِبَادِكَ الصَّالِحِينَ",
    transliteration: "Allahummaj-'alni fihi minal-mustaghfireen, waj-'alni fihi min 'ibadikas-saliheen",
    translation: "O Allah, place me among those who seek forgiveness, and make me one of Your righteous servants."
  },
  {
    arabic: "اللَّهُمَّ لا تَخْذُلْنِي فِيهِ لِتَعَرُّضِ مَعْصِيَتِكَ، وَلا تَضْرِبْنِي بِسِيَاطِ نَقِمَتِكَ",
    transliteration: "Allahumma la takhdhulni fihi lita'arrudhi ma'siyatik, wa la tadhribni bisiyati naqimatik",
    translation: "O Allah, do not forsake me for my disobedience, and do not strike me with the whips of Your punishment."
  },
  {
    arabic: "اللَّهُمَّ أَعِنِّي فِيهِ عَلَى صِيَامِهِ وَقِيَامِهِ، وَجَنِّبْنِي فِيهِ مِنْ هَفَوَاتِهِ وَآثَامِهِ",
    transliteration: "Allahumma a'inni fihi 'ala siyamihi wa qiyamihi, wa jannibni fihi min hafawatihi wa athamih",
    translation: "O Allah, help me in its fasting and standing, and keep me away from its mistakes and sins."
  },
  {
    arabic: "اللَّهُمَّ ارْزُقْنِي فِيهِ رَحْمَةَ الأَيْتَامِ، وَإِطْعَامَ الطَّعَامِ، وَإِفْشَاءَ السَّلامِ",
    transliteration: "Allahummar-zuqni fihi rahmatal-aytam, wa it'amat-ta'am, wa ifsha'as-salam",
    translation: "O Allah, grant me mercy towards orphans, feeding the hungry, and spreading the greeting of peace."
  },
  {
    arabic: "اللَّهُمَّ اجْعَلْ لِي فِيهِ نَصِيباً مِنْ رَحْمَتِكَ الْوَاسِعَةِ، وَاهْدِنِي فِيهِ لِبَرَاهِينِكَ السَّاطِعَةِ",
    transliteration: "Allahummaj-'al lee fihi naseeban min rahmatikal-wasi'ah, wahdini fihi libaraheenikas-sati'ah",
    translation: "O Allah, grant me a share of Your vast mercy, and guide me to Your bright proofs."
  },
  {
    arabic: "اللَّهُمَّ اجْعَلْنِي فِيهِ مِنَ الْمُتَوَكِّلِينَ عَلَيْكَ، وَاجْعَلْنِي فِيهِ مِنَ الْفَائِزِينَ لَدَيْكَ",
    transliteration: "Allahummaj-'alni fihi minal-mutawakkileena 'alayk, waj-'alni fihi minal-fa'izeena ladayk",
    translation: "O Allah, place me among those who trust in You, and among those who are successful in Your sight."
  },
  {
    arabic: "اللَّهُمَّ حَبِّبْ إِلَيَّ فِيهِ الإِحْسَانَ، وَكَرِّهْ إِلَيَّ فِيهِ الْفُسُوقَ وَالْعِصْيَانَ",
    transliteration: "Allahumma habbib ilayya fihil-ihsan, wa karrih ilayya fihil-fusuqa wal-'isyan",
    translation: "O Allah, make good deeds beloved to me, and make disobedience and sins hateful to me."
  },
  {
    arabic: "اللَّهُمَّ زَيِّنِّي فِيهِ بِالسِّتْرِ وَالْعَفَافِ، وَاسْتُرْنِي فِيهِ بِلِبَاسِ الْقُنُوعِ وَالْكَفَافِ",
    transliteration: "Allahumma zayyinni fihi bis-sitri wal-'afaf, wasturni fihi bilibasil-qunu'i wal-kafaf",
    translation: "O Allah, adorn me with modesty and chastity, and clothe me with contentment and sufficiency."
  },
  {
    arabic: "اللَّهُمَّ طَهِّرْنِي فِيهِ مِنَ الدَّنَسِ وَالأَقْذَارِ، وَصَبِّرْنِي فِيهِ عَلَى كَائِنَاتِ الأَقْدَارِ",
    transliteration: "Allahumma tahhirni fihi minad-danasi wal-aqdhar, wa sabbirni fihi 'ala ka'inatil-aqdar",
    translation: "O Allah, purify me from filth and impurities, and grant me patience over destiny's trials."
  },
  {
    arabic: "اللَّهُمَّ لا تُؤَاخِذْنِي فِيهِ بِالْعَثَرَاتِ، وَأَقِلْنِي فِيهِ مِنَ الْخَطَايَا وَالْهَفَوَاتِ",
    transliteration: "Allahumma la tu'akhidhni fihi bil-'atharat, wa aqilni fihi minal-khataya wal-hafawat",
    translation: "O Allah, do not hold me accountable for my slips, and pardon my mistakes and errors."
  },
  {
    arabic: "اللَّهُمَّ ارْزُقْنِي فِيهِ طَاعَةَ الْخَاشِعِينَ، وَاشْرَحْ فِيهِ صَدْرِي بِإِنَابَةِ الْمُخْبِتِينَ",
    transliteration: "Allahummar-zuqni fihi ta'atal-khashi'een, washrah fihi sadri bi-inabatil-mukhbiteen",
    translation: "O Allah, grant me the obedience of the humble, and expand my heart through the repentance of the lowly."
  },
  {
    arabic: "اللَّهُمَّ وَفِّقْنِي فِيهِ لِمُوَافَقَةِ الأَبْرَارِ، وَجَنِّبْنِي فِيهِ مُرَافَقَةَ الأَشْرَارِ",
    transliteration: "Allahumma waffiqni fihi limuwafaqatil-abrar, wa jannibni fihi murafaqatal-ashrar",
    translation: "O Allah, grant me success in following the righteous, and keep me away from the company of the wicked."
  },
  {
    arabic: "اللَّهُمَّ اهْدِنِي فِيهِ لِصَالِحِ الأَعْمَالِ، وَاقْضِ لِي فِيهِ الْحَوَائِجَ وَالآمَالَ",
    transliteration: "Allahumma-hdini fihi lisalihil-a'mal, waqdhi lee fihil-hawa'ija wal-amal",
    translation: "O Allah, guide me to righteous deeds, and fulfill my needs and hopes."
  },
  {
    arabic: "اللَّهُمَّ نَبِّهْنِي فِيهِ لِبَرَكَاتِ أَسْحَارِهِ، وَنَوِّرْ قَلْبِي بِضِيَاءِ أَنْوَارِهِ",
    transliteration: "Allahumma nabbeehni fihi libarakati asharih, wa nawwir qalbi bidhiya'i anwarih",
    translation: "O Allah, alert me to the blessings of its dawn, and illuminate my heart with its light."
  },
  {
    arabic: "اللَّهُمَّ وَفِّرْ فِيهِ حَظِّي مِنْ بَرَكَاتِهِ، وَسَهِّلْ سَبِيلِي إِلَى خَيْرَاتِهِ",
    transliteration: "Allahumma waffir fihi hadhdhi min barakatih, wa sahhil sabeeli ila khayratih",
    translation: "O Allah, maximize my share of its blessings, and ease my way towards its goodness."
  },
  {
    arabic: "اللَّهُمَّ افْتَحْ لِي فِيهِ أَبْوَابَ الْجِنَانِ، وَأَغْلِقْ عَنِّي فِيهِ أَبْوَابَ النِّيرَانِ",
    transliteration: "Allahumma-ftah lee fihi abwabal-jinan, wa aghliq 'anni fihi abwaban-neeran",
    translation: "O Allah, open for me the gates of Paradise, and close for me the gates of the Fire."
  },
  {
    arabic: "اللَّهُمَّ اجْعَلْ لِي فِيهِ إِلَى مَرْضَاتِكَ دَلِيلاً، وَلا تَجْعَلْ لِلشَّيْطَانِ فِيهِ عَلَيَّ سَبِيلاً",
    transliteration: "Allahummaj-'al lee fihi ila mardhatika daleela, wa la taj'al lish-shaytani fihi 'alayya sabeela",
    translation: "O Allah, provide for me a guide to Your pleasure, and do not let Satan have any way over me."
  },
  {
    arabic: "اللَّهُمَّ افْتَحْ لِي فِيهِ أَبْوَابَ فَضْلِكَ، وَأَنْزِلْ عَلَيَّ فِيهِ بَرَكَاتِكَ",
    transliteration: "Allahumma-ftah lee fihi abwaba fadhlika, wa anzil 'alayya fihi barakatik",
    translation: "O Allah, open for me the gates of Your bounty, and send down Your blessings upon me."
  },
  {
    arabic: "اللَّهُمَّ اغْسِلْنِي فِيهِ مِنَ الذُّنُوبِ، وَطَهِّرْنِي فِيهِ مِنَ الْعُيُوبِ",
    transliteration: "Allahumma-ghsilni fihi minadh-dhunoob, wa tahhirni fihi minal-'uyoob",
    translation: "O Allah, wash away my sins, and purify me from all defects."
  },
  {
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ فِيهِ مَا يُرْضِيكَ، وَأَعُوذُ بِكَ مِمَّا يُؤْذِيكَ",
    transliteration: "Allahumma innee as'aluka fihi ma yurdheek, wa a'udhu bika mimma yu'dheek",
    translation: "O Allah, I ask You for what pleases You, and I seek refuge in You from what offends You."
  },
  {
    arabic: "اللَّهُمَّ اجْعَلْنِي فِيهِ مُحِبّاً لأَوْلِيَائِكَ، وَمُعَادِياً لأَعْدَائِكَ",
    transliteration: "Allahummaj-'alni fihi muhibban li-awliya'ik, wa mu'adiyan li-a'da'ik",
    translation: "O Allah, make me a lover of Your friends and an enemy of Your enemies."
  },
  {
    arabic: "اللَّهُمَّ اجْعَلْ سَعْيِي فِيهِ مَشْكُوراً، وَذَنْبِي فِيهِ مَغْفُوراً",
    transliteration: "Allahummaj-'al sa'yee fihi mashkoora, wa dhanbee fihi maghfoora",
    translation: "O Allah, let my efforts in it be rewarded, and my sins in it be forgiven."
  },
  {
    arabic: "اللَّهُمَّ ارْزُقْنِي فِيهِ فَضْلَ لَيْلَةِ الْقَدْرِ، وَصَيِّرْ أُمُورِي فِيهِ مِنَ الْعُسْرِ إِلَى الْيُسْرِ",
    transliteration: "Allahummar-zuqni fihi fadhla laylatil-qadr, wa sayyir umooree fihi minal-'usri ilal-yusr",
    translation: "O Allah, grant me the blessings of the Night of Power, and change my affairs from hardship to ease."
  },
  {
    arabic: "اللَّهُمَّ وَفِّرْ حَظِّي فِيهِ مِنَ النَّوَافِلِ، وَأَكْرِمْنِي فِيهِ بِإِحْضَارِ الْمَسَائِلِ",
    transliteration: "Allahumma waffir hadhdhi fihi minan-nawafil, wa akrimni fihi bi-ihdharil-masa'il",
    translation: "O Allah, grant me a share of the voluntary prayers, and honor me by fulfilling my requests."
  },
  {
    arabic: "اللَّهُمَّ غَشِّنِي فِيهِ بِالرَّحْمَةِ، وَارْزُقْنِي فِيهِ التَّوْفِيقَ وَالْعِصْمَةَ",
    transliteration: "Allahumma ghashshini fihi bir-rahmah, warzuqni fihit-tawfeeqa wal-'ismah",
    translation: "O Allah, cover me with mercy, and grant me success and protection from sin."
  },
  {
    arabic: "اللَّهُمَّ اجْعَلْ صِيَامِي فِيهِ بِالشُّكْرِ وَالْقَبُولِ عَلَى مَا تَرْضَاهُ",
    transliteration: "Allahummaj-'al siyami fihi bish-shukri wal-qabooli 'ala ma tardhah",
    translation: "O Allah, let my fast be accepted with gratitude, in a way that pleases You."
  }
];

const DuasSection: React.FC<Props> = ({ selectedDay }) => {
  // Safe access with fallback
  const dayIndex = Math.max(0, Math.min(selectedDay - 1, 29));
  const currentDua = RAMADAN_DUAS[dayIndex];

  const DuaCard = ({ title, arabic, transliteration, translation, iconColor }: any) => (
    <div className="bg-emerald-900/40 border border-emerald-500/20 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
      <h4 className={`text-sm font-bold uppercase tracking-widest mb-4 ${iconColor}`}>{title}</h4>
      <p className="text-2xl md:text-3xl font-amiri text-right mb-4 leading-loose text-white">{arabic}</p>
      <div className="space-y-2">
        <p className="text-sm italic text-emerald-200/80 leading-relaxed">{transliteration}</p>
        <p className="text-sm text-white/90 leading-relaxed font-medium">{translation}</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
      <div className="flex items-center gap-3 mb-2">
        <h2 className="text-2xl font-amiri font-bold text-emerald-200">Sacred Supplications</h2>
        <div className="h-px flex-1 bg-emerald-500/20"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DuaCard 
          title="Sahoor Dua (Intention)"
          arabic="وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ"
          transliteration="Wa bisawmi ghadinn nawaiytu min shahri ramadan"
          translation="I intend to keep the fast for tomorrow in the month of Ramadan."
          iconColor="text-orange-300"
        />
        <DuaCard 
          title="Iftar Dua"
          arabic="اللَّهُمَّ إِنِّي لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ"
          transliteration="Allahumma inni laka sumtu, wa bika aamantu, wa 'alayka tawakkaltu, wa 'ala rizqika aftartu"
          translation="O Allah! I fasted for You and I believe in You and I put my trust in You and with Your sustenance I break my fast."
          iconColor="text-emerald-300"
        />
      </div>

      <div className="bg-emerald-800/20 border border-yellow-500/20 rounded-2xl p-6 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
          <svg className="w-24 h-24 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19,2L14,6.5V17.5L19,13V2M6.5,5C4.85,5 3.19,5.25 1.5,5.75V19.5C3.19,19 4.85,18.75 6.5,18.75C8.25,18.75 9.83,19.07 11.25,19.5V5.75C9.83,5.25 8.25,5 6.5,5M17.5,18.75C16.14,18.75 14.77,18.91 13.5,19.22V5.47C14.77,5.16 16.14,5 17.5,5C19.15,5 20.81,5.25 22.5,5.75V19.5C20.81,19 19.15,18.75 17.5,18.75Z" />
          </svg>
        </div>
        
        <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-yellow-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
          Dua for Ramadan Day {selectedDay}
        </h4>
        
        <div className="relative z-10">
          <p className="text-2xl md:text-3xl font-amiri text-right mb-6 leading-loose text-white selection:bg-yellow-400 selection:text-emerald-900 transition-all">
            {currentDua.arabic}
          </p>
          <div className="space-y-3 border-l-2 border-yellow-500/30 pl-4">
            <p className="text-sm italic text-emerald-200/90 leading-relaxed">
              {currentDua.transliteration}
            </p>
            <p className="text-base text-white/90 leading-relaxed font-medium">
              {currentDua.translation}
            </p>
          </div>
        </div>
      </div>
      
      <p className="text-center text-xs text-emerald-400/50 italic">
        * Select a day in the calendar above to view its specific Dua.
      </p>
    </div>
  );
};

export default DuasSection;
