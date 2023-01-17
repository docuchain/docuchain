import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

export default function Modal(props) {
  const { open, close, header, data, fetchdata } = props;

  const [transNum, setTransNum] = useState();
  const [time, setTime] = useState();
  const [transHash, setTransHash] = useState();
  const [transSize, setTransSize] = useState();
  const [transDataDetail, setTransDataDetail] = useState();
  useEffect(() => {
    fetchdata();
  }, []);

  const { id } = useParams();

  useEffect(() => {
    async function getTrans() {
      const result3 = data.filter((item) => item.blockNumber == parseInt(id));

      result3.forEach((item) => {
        setTransNum(item.transNumber);
        setTime(item.timeStamp);
        setTransHash(item.transHash);
        setTransSize(item.transSize);
        setTransDataDetail(item.transDataDetail);
      });
    }
    getTrans();
  });
  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <main>
            <h3>method : {transDataDetail.method}</h3>
            <div className="boxShadow">
              <TableContainer className="detailTableInner">
                <Table sx={{ minWidth: 340 }} aria-label="simple table">
                  <TableBody style={{ fontSize: "1.2rem" }}>
                    <h3>params : </h3>
                    <TableRow>
                      <TableCell>cr_download</TableCell>
                      <TableCell>
                        : &nbsp;{transDataDetail.params.cr_download}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>cr_hash</TableCell>
                      <TableCell>
                        : &nbsp;{transDataDetail.params.cr_hash}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>cr_id</TableCell>
                      <TableCell>
                        : &nbsp;{transDataDetail.params.cr_id}
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ borderBottom: "hidden" }}>
                      <TableCell>cr_live</TableCell>
                      <TableCell>
                        : &nbsp;{transDataDetail.params.cr_live}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <Button
                  className="close"
                  onClick={close}
                  style={{ border: "1px solid #1976d2" }}
                >
                  닫기 x
                </Button>
              </TableContainer>
            </div>
          </main>
        </section>
      ) : null}
    </div>
  );
}
