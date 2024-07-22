export default function ProfileCard({ info }) {
  return (
    <section className="profil-card">
      <div className="profil-image-wrap">
        <img
          className="profil-image"
          src="src\\assets\\image-victor.jpg"
          alt="victor crest"
        />
      </div>
      <div className="information">
        <span className="name">{info.name}</span>
        <span className="age">{info.age}</span>
        <p className="country">London</p>
      </div>
      <div className="social-media-wrap">
        <div className="media">
          <p className="count">{info.followers}K</p>
          <p className="tag">Followers</p>
        </div>
        <div className="media">
          <p className="count">{info.likes}K</p>
          <p className="tag">Likes</p>
        </div>
        <div className="media">
          <p className="count">{info.photos}K</p>
          <p className="tag">Photos</p>
        </div>
      </div>
    </section>
  );
}
