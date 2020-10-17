import React, { useContext, useState } from "react";
import { Input, Row, Col, Select, Typography, message } from "antd";
import { WarterBillCtx } from "../../App";
import "./index.css";

const { Option } = Select;
const { Search } = Input;
const { Title } = Typography;

const years = [];

const d = new Date();
const currentYear = d.getFullYear();

for (let i = currentYear; i > currentYear - 30; i--) {
  years.push(i);
}

const TopSearch = () => {
  const waterBill = useContext(WarterBillCtx);

  const [year, setYear] = useState();
  const onSearch = (value) => {
    if (!year) {
      message.error("Vui lòng chọn năm");
    } else if (!value) {
      message.error("Xin hãy nhập mã khách hàng");
    } else {
      waterBill.setStore({ ...waterBill.store, loading: true });
      const base =
        "http://app.nuocnongthon.binhdinh.vn/gCityworkServices/rest/gcrmpl/gsv_data/CN0104/khachhangs/LayThongTinChiTiet?maKhachHang=" +
        value +
        "&&tuNgay=" +
        year +
        "-01-01&denNgay=" +
        year +
        "-12-01";
      fetch(base)
        .then((response) => response.json())
        .then((data) => {
          waterBill.setStore({ loading: false, bill: data });
        });
    }
  };

  return (
    <Row className="top-search">
      <Col span={4}>
        <Title level={4}></Title>
      </Col>
      <Col span={6}>
        <Select
          placeholder="Nhập năm tra cứu"
          showSearch
          style={{ width: "80%" }}
          size="large"
          onChange={(value) => {
            setYear(value);
          }}
        >
          {years.map((element) => (
            <Option value={element} key={element}>
              Năm {element}
            </Option>
          ))}
        </Select>
      </Col>
      <Col span={8}>
        <Search enterButton="Tra cứu" placeholder="Nhập mã khách hàng" size="large" onSearch={onSearch} />
      </Col>
    </Row>
  );
};

export default TopSearch;
