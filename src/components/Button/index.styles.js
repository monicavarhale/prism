import styled from "styled-components";

import { spacing, typography, colors, constants } from "../../theme";

const HEIGHT = "36px";
const VARIANTS = {
  standard: {
    color: colors.white,
    backgroundColor: colors.pacific.base,
    borderColor: colors.pacific.base
  },
  standardDisabled: {
    color: colors.white,
    backgroundColor: colors.pacific.muted,
    borderColor: colors.pacific.muted
  },
  outline: {
    color: colors.pacific.base,
    backgroundColor: colors.white,
    borderColor: colors.pacific.base
  },
  outlineDisabled: {
    color: colors.pacific.muted,
    backgroundColor: colors.white,
    borderColor: colors.pacific.muted
  }
};

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${typography.size.hecto};
  font-weight: ${typography.weight.semiBold};
  padding: 0 ${spacing.normal};
  height: ${HEIGHT};
  width: 100%;
  min-width: 100px;
  text-align: center;
  text-transform: capitalize;
  border-radius: ${constants.borderRadius.small};
  margin-right: ${spacing.normal};
  cursor: pointer;

  color: ${({ variant }) => VARIANTS[variant].color};
  background-color: ${({ variant }) => VARIANTS[variant].backgroundColor};
  border: 1px solid ${({ variant }) => VARIANTS[variant].borderColor};

  &:disabled {
    color: ${({ variant }) => VARIANTS[`${variant}Disabled`].color};
    background-color: ${({ variant }) =>
      VARIANTS[`${variant}Disabled`].backgroundColor};
    border: 1px solid
      ${({ variant }) => VARIANTS[`${variant}Disabled`].borderColor};
    cursor: not-allowed;
  }
`;

export const StyledButtonLink = StyledButton.withComponent(`a`).extend`
  text-decoration: none;
`;
