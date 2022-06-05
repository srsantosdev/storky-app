import styled from 'styled-components/native';
import {themes} from '../../styles/themes';

export const Container = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;

  padding-right: 16px;
  padding-left: 16px;
`;

export const ApplicationIDContent = styled.View`
  align-items: center;
`;

export const ApplicationName = styled.Text`
  font-family: ${themes.default.fonts.BOLD};
  font-size: 28px;
  text-align: center;

  margin-top: 16px;
`;

export const ApplicationDescription = styled.Text`
  font-family: ${themes.default.fonts.REGULAR};
  font-size: 14px;

  margin: 16px 24px;
  text-align: center;
`;

export const Actions = styled.View`
  margin-top: 200px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: 100%;
  background-color: ${themes.default.colors.PRIMARY_100};
  border-color: ${themes.default.colors.PRIMARY_MAIN};
  border-width: 1px;
  padding: 8px 32px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-family: ${themes.default.fonts.REGULAR};
  font-size: 14px;
  color: ${themes.default.colors.PRIMARY_MAIN};
`;
