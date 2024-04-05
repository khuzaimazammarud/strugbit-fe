import CreateButton from "../subs/createButton";

import demoSvg from "../../../src/assets/images/placeholder.jpg"

function TableComponent() {
  return (
    <div style={{ marginTop: "50px" }}>
      <section className="overflow-scroll px-5 h-full">
        <div className="table-container">
          <div className="table-header w-full">
            <div></div>
            <div>Username</div>
            <div>Customer Name</div>
            <div>Email</div>
            <div></div>
          </div>
          <div className="table-row w-full">
            <div>
              <img src={demoSvg} alt="" style={{width: '30%', marginLeft: 'auto', marginRight: 'auto'}}/>
            </div>
            <div>John Doe</div>
            <div>
              <a className="customerLink">ABC Company</a>
            </div>
            <div>JohnDoe@gmail.com</div>
            <div class="action-buttons">
              <button class="edit-button">Edit</button>
              <button class="delete-button">Delete</button>
            </div>
          </div>
          <div className="table-row w-full">
            <div>
              <img src={demoSvg} alt="" style={{width: '30%', marginLeft: 'auto', marginRight: 'auto'}}/>
            </div>
            <div>John Doe</div>
            <div>
              <a className="customerLink">ABC Company</a>
            </div>
            <div>JohnDoe@gmail.com</div>
            <div class="action-buttons">
              <button class="edit-button">Edit</button>
              <button class="delete-button">Delete</button>
            </div>
          </div>
          <div className="table-row w-full">
            <div>
              <img src={demoSvg} alt="" style={{width: '30%', marginLeft: 'auto', marginRight: 'auto'}}/>
            </div>
            <div>John Doe</div>
            <div>
              <a className="customerLink">ABC Company</a>
            </div>
            <div>JohnDoe@gmail.com</div>
            <div class="action-buttons">
              <button class="edit-button">Edit</button>
              <button class="delete-button">Delete</button>
            </div>
          </div>
          <div className="table-row w-full">
            <div>
              <img src={demoSvg} alt="" style={{width: '30%', marginLeft: 'auto', marginRight: 'auto'}}/>
            </div>
            <div>John Doe</div>
            <div>
              <a className="customerLink">ABC Company</a>
            </div>
            <div>JohnDoe@gmail.com</div>
            <div class="action-buttons">
              <button class="edit-button">Edit</button>
              <button class="delete-button">Delete</button>
            </div>
          </div>
          <div className="table-row w-full">
            <div>
              <img src={demoSvg} alt="" style={{width: '30%', marginLeft: 'auto', marginRight: 'auto'}}/>
            </div>
            <div>John Doe</div>
            <div>
              <a className="customerLink">ABC Company</a>
            </div>
            <div>JohnDoe@gmail.com</div>
            <div class="action-buttons">
              <button class="edit-button">Edit</button>
              <button class="delete-button">Delete</button>
            </div>
          </div>
          <div className="table-row w-full">
            <div>
              <img src={demoSvg} alt="" style={{width: '30%', marginLeft: 'auto', marginRight: 'auto'}}/>
            </div>
            <div>John Doe</div>
            <div>
              <a className="customerLink">ABC Company</a>
            </div>
            <div>JohnDoe@gmail.com</div>
            <div class="action-buttons">
              <button class="edit-button">Edit</button>
              <button class="delete-button">Delete</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TableComponent;
