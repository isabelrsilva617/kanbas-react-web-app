import ModuleList from "../Modules/ModuleList";

function Home() {
  return (
    <div className="kb-flex-col-container">
      <div className="kb-flex-row-container">
        <div className="kb-flex-col-container ms-2 me-2">
          <ModuleList />
        </div>

        <div className="kb-flex-col-container kb-width-280px">
          <button type="button" class="btn btn-secondary m-1">
            Import Existing Content
          </button>
          <button type="button" class="btn btn-secondary m-1">
            Import From Commons
          </button>
          <button type="button" class="btn btn-secondary m-1">
            Choose Homepage
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
