import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { useI18n, useUser } from '@/hooks';
import { useTheme } from '@/theme';
import layout from '@/theme/layout';

import { AssetByVariant, IconByVariant, Skeleton } from '@/components/atoms';
import { SafeScreen } from '@/components/templates';

const MAX_RANDOM_ID = 9;

function Example() {
  const { t } = useTranslation();
  const { useFetchOneQuery } = useUser();
  const { toggleLanguage } = useI18n();

  const { backgrounds, changeTheme, colors, components, fonts, gutters, variant } =
    useTheme();

  const [currentId, setCurrentId] = useState(-1);

  const fetchOneUserQuery = useFetchOneQuery(currentId);

  useEffect(() => {
    if (fetchOneUserQuery.isSuccess) {
      Alert.alert(
        t('screen_example.hello_user', { name: fetchOneUserQuery.data.name }),
      );
    }
  }, [fetchOneUserQuery.isSuccess, fetchOneUserQuery.data, t]);

  const onChangeTheme = () => { changeTheme(variant === 'default' ? 'dark' : 'default'); };
  const handleResetError = () => void fetchOneUserQuery.refetch();

  return (
    <SafeScreen isError={fetchOneUserQuery.isError} onResetError={handleResetError}>
      <ScrollView contentContainerStyle={[layout.col]}>
        {/* Image Section */}
        <View style={[layout.justifyCenter, layout.itemsCenter, gutters.marginTop_80]}>
          <View style={[layout.relative, backgrounds.gray100, components.circle250]} />
          <View style={[layout.absolute, gutters.paddingTop_80]}>
            <AssetByVariant path="tom" resizeMode="contain" style={{ height: 300, width: 300 }} />
          </View>
        </View>

        {/* Text Section */}
        <View style={[gutters.paddingHorizontal_32, gutters.marginTop_40]}>
          <View style={[gutters.marginTop_40]}>
            <Text style={[fonts.size_40, fonts.gray800, fonts.bold]}>
              {t('screen_example.title')}
            </Text>
            <Text style={[fonts.size_16, fonts.gray200, gutters.marginBottom_40]}>
              {t('screen_example.description')}
            </Text>
          </View>

          {/* Buttons Row */}
          <View style={[layout.row, layout.justifyBetween, layout.fullWidth, gutters.marginTop_16]}>
            {/* Fetch User */}
            <Skeleton
              height={64}
              loading={fetchOneUserQuery.isLoading}
              style={{ borderRadius: components.buttonCircle.borderRadius }}
              width={64}
            >
              <TouchableOpacity
                onPress={() => { setCurrentId(Math.ceil(Math.random() * MAX_RANDOM_ID + 1)); }}
                style={[components.buttonCircle, gutters.marginBottom_16]}
                testID="fetch-user-button"
              >
                <IconByVariant path="send" stroke={colors.purple500} />
              </TouchableOpacity>
            </Skeleton>

            {/* Theme */}
            <TouchableOpacity
              onPress={onChangeTheme}
              style={[components.buttonCircle, gutters.marginBottom_16]}
              testID="change-theme-button"
            >
              <IconByVariant path="theme" stroke={colors.purple500} />
            </TouchableOpacity>

            {/* Language */}
            <TouchableOpacity
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onPress={toggleLanguage}
              style={[components.buttonCircle, gutters.marginBottom_16]}
              testID="change-language-button"
            >
              <IconByVariant path="language" stroke={colors.purple500} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeScreen>
  );
}

export default Example;
