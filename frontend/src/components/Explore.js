import Post from "./Post";

function Explore() {
  const posts = [
    {
      shayari:
        "Dil ki har ek baat tumse kehne ki aarzoo thi, tumne mujhse milke zindagi mein nayi roshni bhar di.",
    },
    {
      shayari:
        "Tere bina jeena, ek mazaaq sa lagta hai, apne dil mein bas teri yaadon ka raaj hai.",
    },
    {
      shayari:
        "Kismat ke chakkar mein humne tumhe khona nahi chaahaa tha, par khuda se dua karte hain ki tum humare paas ho.",
    },
    {
      shayari:
        "Jab tum paas ho, toh ye zindagi ek nayi roshni hai, tumse duri mein sab kuch andhera sa lagta hai.",
    },
    {
      shayari:
        "Bhi dil ki baatein hum tumse kehne nahi chahte, lekin ye dil kabhi bhi tumse chhupne nahi chahte.",
    },
    {
      shayari:
        "Tumhaare bina, ye duniya khaali hai, tumhare saath toh har ek raasta zindagi ka naya hai.",
    },
    {
      shayari:
        "Dil ki har ek baat tumse kehna chahta hoon, har ek pal tumhe apne dil mein mehsoos karna chahta hoon.",
    },
    {
      shayari:
        "Jo bhi kuchh hai, bas tumhare saath ho, har ek pal mein apne dil ko mehsoos karna chahta hoon.",
    },
    {
      shayari:
        "Tere bina jeena mushkil hai, lekin apne sapno mein tumhe har waqt apne paas paana chahta hoon.",
    },
    {
      shayari: "Dil ke kone mein ek khaali jagah hai, tumhari yaadon ke liye.",
    },
    {
      shayari:
        "Agar tum saath ho, toh sab kuch sahna asaan lagta hai, tumhare bina toh dil mein udaasi ka samaan lagta hai.",
    },
    {
      shayari:
        "Kabhi humne bhi sapne dekhe the, apne saath tumhe dekhne ke, magar tum nahi aaye.",
    },
    {
      shayari:
        "Aap se milke, kuch aur hi jazbaat jagaye hain humne, tumhare liye apni har ek khushi chhupa li hai.",
    },
    {
      shayari:
        "Dil se jo baat nikalti hai, vo jazbaat tumhare liye hamesha jeeti hai.",
    },
    {
      shayari:
        "Mohabbat mein humne sab kuch khoya hai, par dil ki ek ek baat tumhare naam ki hai.",
    },
    {
      shayari:
        "Jab tak na milo, dil ka haal kaisa samjhoge, mohabbat ka izhaar hum kaise karenge.",
    },
  ];

  return (
    <div className="bg-yellow-600">
      <div
        className="bg-yellow-600 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start fixed top-0 left-0 w-full z-10 shadow-md pb-2"
        style={{ height: "80px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center my-2 my-lg-0 me-lg-auto font-bold text-2xl text-white text-decoration-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 1)", transform: "0", msfilter: "0" }}
            className="flex items-center justify-center"
          >
            <path d="m22 3.41-.12-1.26-1.2.4a13.84 13.84 0 0 1-6.41.64 11.87 11.87 0 0 0-6.68.9A7.23 7.23 0 0 0 3.3 9.5a9 9 0 0 0 .39 4.58 16.6 16.6 0 0 1 1.18-2.2 9.85 9.85 0 0 1 4.07-3.43 11.16 11.16 0 0 1 5.06-1A12.08 12.08 0 0 0 9.34 9.2a9.48 9.48 0 0 0-1.86 1.53 11.38 11.38 0 0 0-1.39 1.91 16.39 16.39 0 0 0-1.57 4.54A26.42 26.42 0 0 0 4 22h2a30.69 30.69 0 0 1 .59-4.32 9.25 9.25 0 0 0 4.52 1.11 11 11 0 0 0 4.28-.87C23 14.67 22 3.86 22 3.41z"></path>
          </svg>
          THOUGHTS
        </a>

        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
          <li>
            <a
              href="/"
              className="nav-link text-secondary flex items-center space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(0, 0, 0, 1)",
                  transform: "0",
                  msfilter: "0",
                }}
              >
                <path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path>
              </svg>
              <span>Home</span>
            </a>
          </li>

          <li>
            <a
              href="/"
              className="nav-link text-white flex items-center space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(0, 0, 0, 1)",
                  transform: "0",
                  msfilter: "0",
                }}
              >
                <path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"></path>
              </svg>
              <span>Explore</span>
            </a>
          </li>

          <li>
            <a
              href="/"
              className="nav-link text-white flex items-center space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(0, 0, 0, 1)",
                  transform: "0",
                  msfilter: "0",
                }}
              >
                <path d="M4 21h15.893c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zm0-2v-5h4v5H4zM14 7v5h-4V7h4zM8 7v5H4V7h4zm2 12v-5h4v5h-4zm6 0v-5h3.894v5H16zm3.893-7H16V7h3.893v5z"></path>
              </svg>
              <span>Profile</span>
            </a>
          </li>

          <li>
            <a
              href="/"
              className="nav-link text-white flex items-center space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(0, 0, 0, 1)",
                  transform: "0",
                  msfilter: "0",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(0, 0, 0, 1)",
                    transform: "0",
                    msfilter: "0",
                  }}
                >
                  <path d="m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.683 7.683 0 0 0-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a.999.999 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"></path>
                </svg>
              </svg>
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </div>

      {/* HERO SECTION  */}
      <div className="flex-col w-100 pt-[90px]">
        {posts.map((post, index) => (
          <div className="w-100  mb-4 flex justify-center   " key={index}>
            <Post post={post.shayari} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
