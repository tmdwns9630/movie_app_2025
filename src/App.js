import PropTypes from "prop-types";

//음식 컴포넌트 본체
function Food({ name, picture, rating }) {
  console.log(name);
  return (
    <div>
      <h3>I love {name}</h3>
      <h4>제 점수는요 {rating}/5.0입니다</h4>
      <img src={picture} alt={name} />
    </div>
  );
}
console.log(process.env.NODE_ENV);

//배열 만들어서 적당한 데이터 추가.
const foodILike = [
  {
    id: 1,
    name: "steam",
    image:
      "https://i.namu.wiki/i/MVCpIUD6GNZEEcqgLnEipsD33WcC-vJKbiAiwxam6mcsY6NPJUyx1_oR2Xn41VGB2OL3m-KRqKE-CG9cKMnplgSQJxqXsqLChrGnYMLL93TaWDMLTPsj_pybF_s4Khz5kVk2QCYrWC4ZYn8YZWvx-w.webp",
    rating: 5.0,
  },
  {
    id: 2,
    name: "Bibimap",
    image:
      "https://i.namu.wiki/i/2LmAZoS-49yWB7h2FmrAolAJ9hk7iDwB6dlbT5KzGeFcvLSd688LTA_q5-OKHiMMhDGArKYtyWIwdbj5_IFeqW4bzuQzoaNAzVXXySENw9yMtvkNUGVKKW4rUJEBVA9EF3QHuJijsPk1XkKTJof14A.webp",

    rating: 4.7,
  },
  {
    id: 3,
    name: "isWhiteSpaceSingleLine",
    image:
      "https://i.namu.wiki/i/CFM_F-jHfEwNZ-tAfuWbKYRFnNa432cOdV5Yt_610Pd3suzRs12dnGRNxYGMS559kZmcqVP2zLq4vR7TH1ihJiyhJp-0CaWMvc3ZBJ0589IDg_xubolNknjwOYiG9ZGYqf5ryd9bGJNOg8l1wdJQQw.webp",
    rating: 3.4,
  },
];

//propTypes 사용. props의 타입 지정하기.
Food.propTypes = {
  name: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

console.log(process.env.NODE_ENV);

//App 본체
function App() {
  return (
    <div className="App">
      <div>
        1. 에스텔은 어떤 실험체인가? 에스텔은 탱인가 브루저인가에 대해 오랜
        논쟁이 있어왔고, 결국 결론이 나지 않은 채 다들 탱브루저라고 에스텔을
        부르기 시작했지만, 중요한 것은 우리가 에스텔에게 1선 탱커의 역할을
        기대한다는 것이다. 때문에 기본적인 운영이나 포지셔닝은 타 1선 탱커랑
        비슷하지만, 에스텔은 탱커로서 치명적인 문제가 하나 있다. 바로 몸이
        굉장히 약하다는 것이다. 에스텔을 탱이 아니라 탱브루저라고 부르는 이유가
        있다. 에스텔은 알론소 부거 가넷 등 진또배기 탱들하고 비교하면 몸이
        굉장히 약하다. 특히 이번 시즌은 탱커들 몸이 유난히 약해서 비유가 아니라
        정말로 스킬 없이 적의 화력에 2~3초만 노출돼도 물 묻은 화장지마냥
        찢어진다. 이는 에스텔이 정직하게 앞에서 상대 화력을 받아주는 것을
        목적으로 설계되지 않았기 때문이다. 에스텔은 e스킬에서 나오는 뎀감과 다른
        스킬들에서 나오는 cc, 기동력, 유틸, 그리고 데미지 등을 이용해서 탱킹하는
        실험체이다. 때문에 퓨어탱 같은 플레이를 기대하고 에스텔을 픽한다면
        실망하기 쉽지만, 에스텔이 가진 장점을 살려가면서 플레이한다면 다른
        탱커들로는 불가능한 플레이가 많이 가능해지는 것이 에스텔의 매력이다.
        장점 – 예쁘다. 딜이 세다. 전투 중 기동력이 탱커중 상위권이다. 방패만
        있다면 체급도 높다. 궁이 글로벌이다. Cc 개수가 많다. 야동 잘잡고
        스플릿하기도 좋다. 단점 – 저지력이 은근히 떨어진다. 조작감 논란이 있다.
        방패가 있어야 기동력, 체급, 데미지가 산다. 방패가 없는 에스텔은 물몸에,
        뎀지도 부족하고, 기동력도 애매한 예쁜 소방관눈나에 지나지 않는다.
      </div>
      <div>
        {foodILike.map((dish) => (
          <Food
            key={dish.id}
            name={dish.name}
            picture={dish.image}
            rating={dish.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
