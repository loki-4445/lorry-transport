import React, { useState } from "react";
import "./Modal.css";
import { FaRegWindowClose } from "react-icons/fa";

function Modal({ setOpenModal }) {
  const [transportType, setTransportType] = useState('');
  const [formData, setFormData] = useState({
    pickupAddress: '',
    dropOffAddress: '',
    contact: '',
    date: '',
    weight: '',
    rooms: '',
    furniture: '',
    appliances: '',
    goodsType: '',
    quantity: '',
    specialInstructions: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => setOpenModal(false)}>
            <FaRegWindowClose />
          </button>
        </div>
        <div className="form-container">
          <h2>Transportation Form</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Transportation Type:
              <select
                name="transportType"
                value={transportType}
                onChange={(e) => setTransportType(e.target.value)}
              >
                <option value="">Select...</option>
                <option value="houseShifting">House Shifting</option>
                <option value="goods">Goods Transportation</option>
              </select>
            </label>

            <div className="input-group">
              <label>
                Pickup Address:
                <input
                  type="text"
                  name="pickupAddress"
                  value={formData.pickupAddress}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label>
                Drop-off Address:
                <input
                  type="text"
                  name="dropOffAddress"
                  value={formData.dropOffAddress}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label>
                Contact Information:
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label>
                Preferred Date:
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label>
                Estimated Weight/Size (kg):
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>

            {transportType === 'houseShifting' && (
              <div className="house-shifting-fields">
                <label>
                  Number of Rooms:
                  <input
                    type="number"
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleInputChange}
                    required
                  />
                </label>

                <label>
                  Furniture Details:
                  <input
                    type="text"
                    name="furniture"
                    value={formData.furniture}
                    onChange={handleInputChange}
                  />
                </label>

                <label>
                  Appliances (e.g., fridge, washing machine):
                  <input
                    type="text"
                    name="appliances"
                    value={formData.appliances}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
            )}

            {transportType === 'goods' && (
              <div className="goods-transport-fields">
                <label>
                  Type of Goods:
                  <input
                    type="text"
                    name="goodsType"
                    value={formData.goodsType}
                    onChange={handleInputChange}
                    required
                  />
                </label>

                <label>
                  Quantity/Units:
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    required
                  />
                </label>

                <label>
                  Special Handling Instructions:
                  <input
                    type="text"
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
            )}

          
          </form>
        </div>
        <div className="footer">
          <button
            onClick={() => setOpenModal(false)}
            id="cancelBtn"
            className="cncl text-center p-1"
          >
            Cancel
          </button>
          <button className="bg-success p-1 text-center">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
