import ModuleList from "./ModuleList";
function Modules() {
  return (
    <div className="kb-flex-col-container">
      <div className="kb-flex-row-container">
        <div className="kb-flex-col-container ms-2 me-2">
          <ModuleList />
        </div>
      </div>
    </div>
  );
}
export default Modules;
