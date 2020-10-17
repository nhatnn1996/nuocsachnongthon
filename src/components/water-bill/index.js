import React, { useContext, Fragment } from "react";
import { Spin, Space, Empty, Table, Tag, Alert } from "antd";
import { WarterBillCtx } from "../../App";
import "./index.css";

const columns = [
  {
    title: "Tên khách hàng",
    dataIndex: "tenKhachHang",
    key: "tenKhachHang",
    render: (text) => <i>{text}</i>,
  },
  {
    title: "Seri đồng hồ",
    dataIndex: "seriDongHo",
    key: "seriDongHo",
  },
  {
    title: "Năm",
    dataIndex: "nam",
    key: "maDoiTuong",
  },
  {
    title: "Tháng",
    dataIndex: "thang",
    key: "maDoiTuong",
  },
  {
    title: "Chỉ số đầu",
    dataIndex: "chiSoDau",
    key: "chiSoDau",
    render: (text) => <b>{text}</b>,
  },
  {
    title: "Chỉ số cuối",
    dataIndex: "chiSoCuoi",
    key: "chiSoCuoi",
    render: (text) => <b>{text}</b>,
  },
  {
    title: "Tiêu thụ",
    dataIndex: "tieuThu",
    key: "tieuThu",
    render: (text) => <b>{text}</b>,
  },
  {
    title: "Tổng tiền",
    dataIndex: "tongTien",
    key: "tongTien",
    render: (text) => <b>{text.toLocaleString("vi", { style: "currency", currency: "VND" })}</b>,
  },
  {
    title: "Đã thanh toán",
    dataIndex: "daThanhToan",
    key: "daThanhToan",
    render: (text) => (
      <b>
        {text === true ? (
          <Alert message="Đã thanh toán" type="success" showIcon />
        ) : (
          <Alert message="Chưa thanh toán" type="warning" showIcon />
        )}
      </b>
    ),
  },
];

const ResultBill = (props) => {
  let showData = props.store.bill && props.store.bill.totalcount > 0 ? true : false;

  if (!showData)
    return (
      <Space className="wrap">
        <Empty />
      </Space>
    );
  if (showData) {
    const data = props.store.bill.listobject.map((element, index) => {
      element.key = index;
      return element;
    });

    return <Table dataSource={data} columns={columns} />;
  }
};

const TableBill = () => {
  const { store } = useContext(WarterBillCtx);
  return (
    <div className="result-bill">
      {store.loading === true && (
        <Space className="wrap">
          <Spin size="large" />
        </Space>
      )}
      {!store.loading && <ResultBill store={store} />}
    </div>
  );
};

export default TableBill;
