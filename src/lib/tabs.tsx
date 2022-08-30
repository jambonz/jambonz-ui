/** Peer dep imports */
import React, { useState, useEffect } from "react";

/** Local imports */
import { classNames } from "./utils";

/** Type imports */
import type { Dispatch, SetStateAction } from "react";

export type TabProps = {
  /** Unique ID for each tab */
  id: string;
  /** Text label for each tab */
  label: string;
  /** The JSX content for each tab */
  children: React.ReactNode;
};

/**
 * Wrapper component for tab content.
 */
export function Tab({ children }: TabProps) {
  return children as React.ReactElement;
}

export type TabsProps = {
  /** The React children to map and render from */
  children: React.ReactElement<TabProps>[];
  /** State tuple to pass that receives the active tab */
  active: [string, Dispatch<SetStateAction<string>>];
};

/**
 * Global UI for tabbed content.
 */
export function Tabs({
  children,
  active: [activeTab, setActiveTab],
}: TabsProps) {
  const [button, setButton] = useState<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (setActiveTab) {
      setActiveTab(children[0].props.id);
    }
  }, []);

  return (
    <div className="tabs">
      <nav className="tabs__nav">
        {React.Children.map(children, (child: React.ReactElement<TabProps>) => {
          const classes = {
            tabs__nav__item: true,
            active: activeTab === child.props.id,
          };

          return (
            <button
              type="button"
              className={classNames(classes)}
              onClick={() => {
                setActiveTab(child.props.id);
              }}
              ref={(element) => {
                if (activeTab === child.props.id) {
                  setButton(element);
                }
              }}
            >
              {child.props.label}
            </button>
          );
        })}
        <div
          className="tabs__active"
          style={{
            width: `${button?.clientWidth}px`,
            transform: `translate3d(${button?.offsetLeft}px, 0, 0)`,
          }}
        ></div>
      </nav>
      <div className="tabs__tabs">
        {React.Children.map(children, (child: React.ReactElement<TabProps>) => {
          const classes = {
            tabs__tabs__item: true,
            active: activeTab === child.props.id,
          };

          return (
            <div className={classNames(classes)}>
              <>{child.props.children}</>
            </div>
          );
        })}
      </div>
    </div>
  );
}
