import React, { FunctionComponent, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../state";
import { toggleAside } from "../../state/common";
import { Aside, BodyStyle } from "./doc-page-elements";
import { DocPagePaneHeader } from "./doc-page-pane-header";

export const DocPageAside: FunctionComponent = ({ children }) => {
  const showAside = useSelector<State, boolean>(
    (state) => state.common.showAside
  );
  const dispatch = useDispatch();

  const handleCloseAside = useCallback(() => {
    dispatch(toggleAside());
  }, []);

  return (
    <Aside className={showAside ? "show" : ""}>
      <BodyStyle disableScrolling={showAside} />
        <DocPagePaneHeader
          title="About this article"
          showWhenScreenWidthIsSmallerThan={1300}
          onClose={handleCloseAside}
        />
        {children}
    </Aside>
  );
};
