// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {
    ChannelScreen,
    ChannelListScreen,
} from '@support/ui/screen';
import {timeouts} from '@support/utils';
import {expect} from 'detox';

class CreateOrEditChannelScreen {
    testID = {
        createOrEditChannelScreen: 'create_or_edit_channel.screen',
        closeButton: 'close.create_or_edit_channel.button',
        createButton: 'create_or_edit_channel.create.button',
        saveButton: 'create_or_edit_channel.save.button',
        scrollView: 'create_or_edit_channel.scrollview',
        makePrivateToggledOff: 'channel_info_form.make_private.toggled.false',
        makePrivateToggledOn: 'channel_info_form.make_private.toggled.true',
        makePrivateDescription: 'channel_info_form.make_private.description',
        displayNameInput: 'channel_info_form.display_name.input',
        purposeInput: 'channel_info_form.purpose.input',
        purposeDescription: 'channel_info_form.purpose.description',
        headerInput: 'channel_info_form.header.input',
        headerDescription: 'channel_info_form.header.description',
    };

    createOrEditChannelScreen = element(by.id(this.testID.createOrEditChannelScreen));
    closeButton = element(by.id(this.testID.closeButton));
    createButton = element(by.id(this.testID.createButton));
    saveButton = element(by.id(this.testID.saveButton));
    scrollView = element(by.id(this.testID.scrollView));
    makePrivateToggledOff = element(by.id(this.testID.makePrivateToggledOff));
    makePrivateToggledOn = element(by.id(this.testID.makePrivateToggledOn));
    makePrivateDescription = element(by.id(this.testID.makePrivateDescription));
    displayNameInput = element(by.id(this.testID.displayNameInput));
    purposeInput = element(by.id(this.testID.purposeInput));
    purposeDescription = element(by.id(this.testID.purposeDescription));
    headerInput = element(by.id(this.testID.headerInput));
    headerDescription = element(by.id(this.testID.headerDescription));

    toBeVisible = async () => {
        await waitFor(this.createOrEditChannelScreen).toExist().withTimeout(timeouts.TEN_SEC);

        return this.createOrEditChannelScreen;
    };

    openCreateChannel = async () => {
        // # Open create channel screen
        await ChannelListScreen.headerPlusButton.tap();
        await ChannelListScreen.createNewChannelItem.tap();

        return this.toBeVisible();
    };

    openEditChannel = async () => {
        // # Open edit channel screen
        await ChannelScreen.introOptionSetHeaderItem.tap();

        return this.toBeVisible();
    };

    close = async () => {
        await this.closeButton.tap();
        await expect(this.createOrEditChannelScreen).not.toBeVisible();
    };

    toggleMakePrivateOn = async () => {
        await this.makePrivateToggledOff.tap();
        await expect(this.makePrivateToggledOn).toBeVisible();
    };

    toggleMakePrivateOff = async () => {
        await this.makePrivateToggledOn.tap();
        await expect(this.makePrivateToggledOff).toBeVisible();
    };
}

const createOrEditChannelScreen = new CreateOrEditChannelScreen();
export default createOrEditChannelScreen;