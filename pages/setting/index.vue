<template>
    <div>
        <b-card class="container" no-body style="border: none;">
            <b-tabs pills card vertical nav-wrapper-class="w-25" style="height: calc(100vh - 17vh);">
                <b-tab class="font1" title="Profile" active>
                    <User/>
                </b-tab>
                <b-tab class="font1" title="Setting">
                    <UserSetting/>
                </b-tab>
                <b-tab class="font1" title="Support">
                    <b-card-text>
                        3
                    </b-card-text>
                </b-tab>
                <b-tab class="font1" title="Tracking status">
                    <Tracking/>
                </b-tab>
                <b-tab class="font1" title="Refund">
                    <b-card-text>
                        5
                    </b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script>
import User from '~/components/User.vue';
import UserSetting from '~/components/setting.vue';
import Tracking from '~/components/tracking .vue';

export default {
    layout: "navbar",
    data() {
        return {};
    },
    components: { UserSetting, Tracking }
}
</script>