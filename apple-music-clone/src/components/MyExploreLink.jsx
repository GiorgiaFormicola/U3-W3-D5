const MyExploreLink = (props) => {
  return (
    <div className="explore-link rounded-3 p-3 text-truncate">
      <a href="" className="text-decoration-none">
        <p className="d-flex justify-content-between align-items-center my-1">
          <span>{props.text}</span>
          <i className="fas fa-chevron-right fs-6 ps-1"></i>
        </p>
      </a>
    </div>
  );
};
export default MyExploreLink;
