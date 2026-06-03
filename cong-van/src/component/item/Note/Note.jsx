import { useMemo, useState, useEffect } from "react";
import { NOTE_CONFIG } from "../../../data/assets/note";
import TabMenu from "./TabMenu";
import "./Note.css";

const MAX_CHARS_PER_PAGE = 400;

function paginateHistory(history) {
  const pages = [];

  let currentPage = [];
  let currentLength = 0;

  history.forEach((item) => {
    const text =
      `${item.sender || ""} ${item.topic || ""} ${item.choice || ""}`;

    const itemLength = text.length;

    if (
      currentLength + itemLength > MAX_CHARS_PER_PAGE &&
      currentPage.length > 0
    ) {
      pages.push(currentPage);
      currentPage = [];
      currentLength = 0;
    }

    currentPage.push(item);
    currentLength += itemLength;
  });

  if (currentPage.length > 0) {
    pages.push(currentPage);
  }

  return pages;
}

export default function Note({
  history = [],
  objectives = []
}) {
  const [activeTab, setActiveTab] = useState("I");
  const [currentPage, setCurrentPage] = useState(0);

  const pages = useMemo(
    () => paginateHistory(history),
    [history]
  );

  const visibleLogs = pages[currentPage] || [];

  const playPageSound = () => {
    const audio = new Audio(NOTE_CONFIG.SOUNDS.rustle);
    audio.volume = 0.3;
    audio.play().catch(() => { });
  };

  const handlePrevPage = () => {
    if (currentPage <= 0) return;

    playPageSound();
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage >= pages.length - 1) return;

    playPageSound();
    setCurrentPage((prev) => prev + 1);
  };

  const handleJumpLatest = () => {
    playPageSound();
    setCurrentPage(Math.max(0, pages.length - 1));
  };

  useEffect(() => {
    if (activeTab === "II") {
      setCurrentPage(Math.max(0, pages.length - 1));
    }
  }, [history.length, pages.length, activeTab]);

  return (
    <div className="note">
      <img
        src={NOTE_CONFIG.UI.background}
        className="note-image"
        alt="note"
      />

      <div className="note-content">
        {activeTab === "II" && (
          <>
            <h2 className="note-title">
              Nhật ký hội thoại
            </h2>

            <div className="note-log-list">
              {visibleLogs.map((item, index) => (
                <div
                  key={`${currentPage}-${index}`}
                  className="note-log-entry"
                >
                  {item.choice ? (
                    <div className="note-log-sender note-log-sender-player">
                      Patrick
                    </div>
                  ) : (
                    <div className="note-log-sender">
                      {item.sender}
                    </div>
                  )}
                  <div className="note-log-title">
                    {item.topic}
                  </div>

                  {item.choice && (
                    <div className="note-log-choice">
                      {item.choice}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {pages.length > 1 && (
              <div className="note-pagination">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 0}
                >
                  Trang trước
                </button>

                <span className="note-pagination-page">
                  {currentPage + 1} / {pages.length}
                </span>

                <button
                  onClick={handleNextPage}
                  disabled={currentPage >= pages.length - 1}
                >
                  Trang sau
                </button>

                <button
                  onClick={handleJumpLatest}
                >
                  Mới nhất
                </button>
              </div>
            )}
          </>
        )}

        {activeTab === "I" && (
          <>
            <h2 className="note-title">
              Chỉ tiêu hiện tại
            </h2>

            <div className="objective-list">
              {objectives?.map((objective, index) => (
                <div
                  key={index}
                  className="objective-box"
                >
                  <div className="objective-header">
                    {objective?.title}
                  </div>

                  <div className="objective-description">
                    {objective?.description}
                  </div>

                  <div className="objective-divider" />

                  <div className="objective-row">
                    <span>Chỉ tiêu than</span>
                    <span>{objective?.requiredCoal ?? 0} tấn</span>
                  </div>

                  <div className="objective-row">
                    <span>Ngày hiện tại</span>
                    <span>{objective?.currentDay ?? "-"}</span>
                  </div>

                  <div className="objective-row">
                    <span>Hạn kiểm tra</span>
                    <span>Ngày {objective?.deadlineDay ?? "-"}</span>
                  </div>

                  <div className="objective-progress">
                    Còn {Math.max(
                      0,
                      (objective?.deadlineDay ?? 0) -
                      (objective?.currentDay ?? 0)
                    )} ngày
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <TabMenu
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setCurrentPage(0);
        }}
      />
    </div>
  );
}